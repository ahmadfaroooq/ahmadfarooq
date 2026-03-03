import { createXai } from '@ai-sdk/xai';
import { generateText } from 'ai';

const xai = createXai({ apiKey: process.env.XAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, role, goal, stage, budget, context } = req.body;

  if (!name || !goal || !stage || !budget) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const prompt = `You are a lead qualification assistant for Ahmad Farooq, a Growth Strategist and Brand Builder who works with founders, CMOs, and executives.

Ahmad's ideal clients:
- Founders or executives who want to build a personal brand on LinkedIn
- Companies ($100K+ ARR or funded) looking for growth marketing, brand strategy, or copy
- People with a real budget ($1K+/month) and a specific goal (not just "get more followers")
- Timeline-oriented: have a genuine need in the next 1-3 months
- Coachable and ready to commit time to the process

NOT a good fit:
- Pre-revenue solopreneurs with no budget
- People who just want vanity metrics without strategy
- Those looking for a one-off task without ongoing strategy
- Agencies looking to resell Ahmad's services

Lead details:
- Name: ${name}
- Role/Title: ${role || 'Not specified'}
- Primary goal: ${goal}
- Business stage: ${stage}
- Budget range: ${budget}
- Context: ${context || 'Not provided'}

Evaluate this lead and respond ONLY with valid JSON in this exact format:
{
  "fit": "good" | "maybe" | "not-a-fit",
  "score": <number 0-100>,
  "headline": "<one sentence verdict>",
  "reasoning": "<2-3 sentences explaining why>",
  "nextStep": "<specific action to take — either book a call, or an alternative>"
}`;

  try {
    const { text } = await generateText({
      model: xai('grok-3-mini'),
      prompt,
      maxTokens: 300,
    });

    // Parse JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON in response');
    const result = JSON.parse(jsonMatch[0]);

    return res.status(200).json(result);
  } catch (err) {
    console.error('Qualify error:', err);
    return res.status(500).json({ error: 'Failed to evaluate lead' });
  }
}
