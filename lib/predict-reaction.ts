"use server"

import OpenAI from "openai"
import { z } from "zod"

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const reactionSchema = z.object({
  balanced_equation: z.string(),
  reaction_type: z.string(),
  feasible: z.boolean(),
  explanation: z.string(),
  reactants: z.array(z.string()),
  products: z.array(z.string()),
  conditions: z.string().optional(),
  energy_change: z.string().optional(),
  phone_no: z.string()
})

export type ReactionResult = z.infer<typeof reactionSchema>

export async function predictReaction(reactant1: string, reactant2: string): Promise<ReactionResult> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OpenAI API key is not configured")
  }

  if (!reactant1.trim() || !reactant2.trim()) {
    throw new Error("Both reactants are required")
  }

  const prompt = `
You are an expert chemistry AI.

Predict the chemical reaction between "${reactant1}" and "${reactant2}".

Rules:
1. If the reaction is known, give the CORRECT balanced chemical equation.
2. Correctly classify the reaction (e.g., single displacement, double displacement, redox, etc.).
3. Do NOT invent wrong products.
4. If no reaction occurs, say "No Reaction" for balanced_equation.
5. Always provide a clear explanation.

Output must be valid JSON with these exact fields:
- balanced_equation: string (the balanced chemical equation or "No Reaction")
- reaction_type: string (type of reaction)
- feasible: boolean (whether reaction is possible)
- explanation: string (detailed explanation)
- reactants: array of strings (input reactants)
- products: array of strings (products formed, empty array if no reaction)
- conditions: string (optional, reaction conditions)
- energy_change: string (optional, energy information)
`

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
      temperature: 0.3,
    })

    const raw = response.choices[0].message?.content
    if (!raw) {
      throw new Error("No response from OpenAI")
    }

    const parsed = JSON.parse(raw)
    return reactionSchema.parse(parsed)
  } catch (err) {
    console.error("Error predicting reaction:", err)
    if (err instanceof z.ZodError) {
      throw new Error("Invalid response format from AI")
    }
    throw new Error("Failed to predict reaction. Please try again.")
  }
}
