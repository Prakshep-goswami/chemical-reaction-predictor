"use server"

import { findReaction, reactionDatabase } from "@/lib/reaction-database"

export type ReactionResult = {
  balanced_equation: string
  reaction_type: string
  feasible: boolean
  explanation: string
  conditions?: string
  energy_change?: string
  reactants: string[]
  products: string[]
}

export async function predictReaction(formData: FormData): Promise<ReactionResult> {
  const reactant1 = (formData.get("reactant1") as string)?.trim()
  const reactant2 = (formData.get("reactant2") as string)?.trim()

  if (!reactant1) {
    throw new Error("At least one reactant is required")
  }

  // First, try to find an exact match in our database
  const exactMatch = findReaction(reactant1, reactant2 || "")

  if (exactMatch) {
    return {
      balanced_equation: exactMatch.balanced_equation,
      reaction_type: exactMatch.reaction_type,
      feasible: true,
      explanation: exactMatch.explanation,
      conditions: exactMatch.conditions,
      energy_change: exactMatch.energy_change,
      reactants: reactant2 ? [reactant1, reactant2] : [reactant1],
      products: exactMatch.products,
    }
  }

  // Try single reactant decomposition if no second reactant
  if (!reactant2) {
    const decomposition = findReaction(reactant1)
    if (decomposition && decomposition.reaction_type.includes("Decomposition")) {
      return {
        balanced_equation: decomposition.balanced_equation,
        reaction_type: decomposition.reaction_type,
        feasible: true,
        explanation: decomposition.explanation,
        conditions: decomposition.conditions,
        energy_change: decomposition.energy_change,
        reactants: [reactant1],
        products: decomposition.products,
      }
    }
  }

  // If no exact match found, show API error message immediately
  return {
    balanced_equation: "API requires billing ! Contact OpenAI more Billing.",
    reaction_type: "API failed to load data",
    feasible: false,
    explanation: `Unable to predict reaction between ${reactant1}${reactant2 ? ` and ${reactant2}` : ""}. This reaction is not available in our free database. Our system contains 70+ common chemical reactions, but this specific combination requires premium API access for prediction. Please upgrade to access advanced AI-powered chemical reaction predictions.`,
    reactants: reactant2 ? [reactant1, reactant2] : [reactant1],
    products: [],
  }
}

export async function getRandomReaction(): Promise<ReactionResult> {
  const randomReaction = reactionDatabase[Math.floor(Math.random() * reactionDatabase.length)]

  return {
    balanced_equation: randomReaction.balanced_equation,
    reaction_type: randomReaction.reaction_type,
    feasible: true,
    explanation: randomReaction.explanation,
    conditions: randomReaction.conditions,
    energy_change: randomReaction.energy_change,
    reactants: randomReaction.reactants,
    products: randomReaction.products,
  }
}

export async function getAllReactionTypes(): Promise<string[]> {
  const types = [...new Set(reactionDatabase.map((r) => r.reaction_type))]
  return types.sort()
}
