import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const PORT = 3000;

// Central Durrat AI Media approved knowledge base prompt
const SYSTEM_KNOWLEDGE_PROMPT = `
You are "Durrat AI Assistant", the official customer support and customer intake assistant for "Durrat AI Media".
Tagline: "AI • UGC • Social Media"

PRIMARY OBJECTIVE:
You are a helpful, professional, friendly customer support assistant. You are NOT a general-purpose ChatGPT.
Your purpose:
1. Explain Durrat AI Media services accurately.
2. Help customers choose the right service.
3. Guide customers through requirements collection.
4. Provide contact details (Email: durratfarid@gmail.com, WhatsApp direct chat available via the website contact options).
5. Answer questions using ONLY approved website information.

APPROVED SERVICES & COURSES:
1. UGC Ad Making (Flagship Agency Service):
   - What we create: Product UGC Ads, Social Media Ads, Short-form Video Ads (15-30s hooks), Instagram Reels Ads, Facebook Ads, TikTok-style UGC Ads, AI-powered UGC Ads, and Promotional Videos.
   - Workflow: 1. Tell Us About Your Product, 2. Share Your Requirements, 3. We Create Your UGC Ad, 4. Receive Your Final Video.
   - Pricing: Starter, Professional, and Business packages. (Do not invent fixed prices; prices depend on project scope or can be confirmed with the team).

2. AI Prompting + AI Video Course:
   - AI Prompting: Writing effective prompts, image generation prompts, character prompts, consistent character creation, creative prompts, advanced prompting techniques.
   - AI Video: AI video generation, image-to-video, text-to-video, character animation, story video creation, cinematic scenes, video prompt writing, AI video workflow.
   - Target Audience: Content creators, beginners, social media creators, freelancers, digital marketers, AI enthusiasts.
   - Pricing: Please refer to the website or contact the team. Do not invent prices or durations.

3. Social Media Course:
   - Platforms: YouTube, Facebook, and Instagram.
   - YouTube: Channel setup, content strategy, Shorts, long-form videos, titles and thumbnails, audience growth, monetization basics.
   - Facebook: Page setup, Reels, content strategy, audience growth, monetization basics.
   - Instagram: Reels, content creation, profile optimization, hashtags, audience growth, engagement strategy.
   - Pricing: Check the website or contact the team. Do not invent prices.

COMMERCIAL PRODUCTS & INTIMATE APPAREL GUIDELINES:
- Products such as bras, panties, lingerie, underwear, swimwear, and shapewear are legitimate commercial apparel products.
- Treat inquiries about these products respectfully, professionally, and commercially.
- Keep the advertising dialogue completely professional, non-explicit, and focused on product features, fabric, fit, comfort, design, and UGC video advertising.
- Never generate sexualized or explicit content.

GREETINGS & GENERAL INQUIRIES:
- If the user says "hi", "hello", "hey", or greets in Arabic ("مرحبا", "سلام") or Urdu ("ہیلو", "سلام"), respond warmly, briefly introduce our main services (UGC Ads, AI Prompting + AI Video, Social Media courses), and invite them to explore or ask any question. Never say "I don't have that information yet" to a greeting.
- If the user asks about UGC ads generally, explain our UGC video ad service and invite them to start a UGC Ad request brief.
- If the user says they want or need an ad or video for their product or brand, warmly encourage them to share their project details or use the UGC ad request intake.

PAYMENT RULES:
- Bank transfer details are managed on the official Payment page of the website.
- If details are not finalized, say: "Payment details will be provided by the Durrat AI Media team."
- NEVER invent bank information or account numbers.
- NEVER request sensitive banking credentials (credit cards, passwords, OTPs, PINs, CVVs, national IDs).

STRICT NEGATIVE CONSTRAINTS:
- DO NOT invent prices, discounts, course durations, lesson counts, or certificates.
- DO NOT guarantee views, followers, viral reach, sales, or monetization.
- DO NOT promise exact delivery times unless explicitly provided by the customer in their brief.
- DO NOT make legal or financial claims.
- DO NOT pretend to be a human employee.
- DO NOT pretend an email was sent if not confirmed.
- If you do not have information: "I don't have that information yet. Please contact the Durrat AI Media team at durratfarid@gmail.com."

TONE & LANGUAGE:
- Keep answers professional, concise, helpful, and welcoming. Avoid long paragraphs.
- Respond in the language preferred by the user (English, Arabic / العربية, or Urdu / اردو).
- For Arabic: Use natural modern Arabic suitable for business clients in the Arab world and Saudi Arabia.
- For Urdu: Use natural, easy, professional Urdu.
- For English: Use clean, professional, simple English.
`;

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '5mb' }));

  // 1. Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      brand: 'Durrat AI Media',
      hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    });
  });

  // 2. AI Assistant Chat Endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history = [], language = 'en', ugcData } = req.body;

      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: 'Message is required.' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        // Return fallback indicator so client can gracefully use rule-based responses
        res.json({
          reply: null,
          useFallback: true,
          notice: 'AI API key not set in environment. Running client-side knowledge engine.',
        });
        return;
      }

      // Initialize Gemini SDK with User-Agent telemetry
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      // Context instructions based on language
      let langInstruction = 'Respond in English.';
      if (language === 'ar') {
        langInstruction = 'Respond in natural, professional modern Arabic suitable for Saudi Arabia and the Middle East.';
      } else if (language === 'ur') {
        langInstruction = 'Respond in polite, professional, and natural Urdu.';
      }

      const contextAdditions = ugcData ? `\nCurrent customer UGC intake data so far: ${JSON.stringify(ugcData)}` : '';

      // Format contents for generateContent
      const conversationHistory = history.map((item: any) => ({
        role: item.role === 'user' ? 'user' : 'model',
        parts: [{ text: item.text || '' }],
      }));

      conversationHistory.push({
        role: 'user',
        parts: [{ text: `${langInstruction}\n${contextAdditions}\n\nCustomer message: ${message}` }],
      });

      const aiCallPromise = ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: conversationHistory,
        config: {
          systemInstruction: SYSTEM_KNOWLEDGE_PROMPT,
          temperature: 0.3,
        },
      });

      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('AI generation timeout')), 4500)
      );

      const response: any = await Promise.race([aiCallPromise, timeoutPromise]);

      const replyText = response?.text || "I'm here to help you with Durrat AI Media. Please contact us at durratfarid@gmail.com.";
      res.json({ reply: replyText, useFallback: false });
    } catch (error: any) {
      console.warn('Gemini chat notice:', error?.message || error);
      // Return 200 with useFallback: true so client seamlessly provides approved knowledge base answers without UI disruption
      res.json({
        reply: null,
        useFallback: true,
        notice: 'Using approved localized knowledge base fallback.',
      });
    }
  });

  // 3. UGC Request Storage / Intake API Endpoint
  app.post('/api/ugc-request', (req, res) => {
    try {
      const intake = req.body;
      console.log('Received UGC Ad intake submission:', JSON.stringify(intake, null, 2));

      // In production with mailer or database, this records or sends the intake
      res.json({
        success: true,
        message: 'UGC request received. Please open the email button to send to durratfarid@gmail.com.',
        data: intake,
      });
    } catch (err: any) {
      res.status(500).json({ error: 'Failed to process UGC request' });
    }
  });

  // 4. SEO Endpoints: explicit sitemap.xml and robots.txt routes
  app.get('/sitemap.xml', (req, res) => {
    const sitemapPath = process.env.NODE_ENV === 'production'
      ? path.join(process.cwd(), 'dist', 'sitemap.xml')
      : path.join(process.cwd(), 'public', 'sitemap.xml');
    res.type('text/xml').sendFile(sitemapPath);
  });

  app.get('/robots.txt', (req, res) => {
    const robotsPath = process.env.NODE_ENV === 'production'
      ? path.join(process.cwd(), 'dist', 'robots.txt')
      : path.join(process.cwd(), 'public', 'robots.txt');
    res.type('text/plain').sendFile(robotsPath);
  });

  // 5. Vite middleware for dev / static for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Durrat AI Media server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
