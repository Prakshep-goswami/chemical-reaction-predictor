export interface ReactionData {
  reactants: string[]
  products: string[]
  balanced_equation: string
  reaction_type: string
  conditions?: string
  energy_change?: string
  explanation: string
}

export const reactionDatabase: ReactionData[] = [
  // Acid-Base Reactions
  {
    reactants: ["HCl", "NaOH"],
    products: ["NaCl", "H2O"],
    balanced_equation: "HCl + NaOH → NaCl + H2O",
    reaction_type: "Acid-Base Neutralization",
    conditions: "Room temperature",
    energy_change: "Exothermic (-57.3 kJ/mol)",
    explanation:
      "Strong acid reacts with strong base to form salt and water. This is a classic neutralization reaction.",
  },
  {
    reactants: ["H2SO4", "NaOH"],
    products: ["Na2SO4", "H2O"],
    balanced_equation: "H2SO4 + 2NaOH → Na2SO4 + 2H2O",
    reaction_type: "Acid-Base Neutralization",
    conditions: "Room temperature",
    energy_change: "Exothermic",
    explanation: "Diprotic acid neutralizes with sodium hydroxide to form sodium sulfate and water.",
  },
  {
    reactants: ["CH3COOH", "NaOH"],
    products: ["CH3COONa", "H2O"],
    balanced_equation: "CH3COOH + NaOH → CH3COONa + H2O",
    reaction_type: "Acid-Base Neutralization",
    conditions: "Room temperature",
    energy_change: "Exothermic",
    explanation: "Acetic acid (weak acid) neutralizes with sodium hydroxide to form sodium acetate.",
  },

  // Precipitation Reactions
  {
    reactants: ["NaCl", "AgNO3"],
    products: ["AgCl", "NaNO3"],
    balanced_equation: "NaCl + AgNO3 → AgCl↓ + NaNO3",
    reaction_type: "Precipitation",
    conditions: "Room temperature, aqueous solution",
    energy_change: "Slightly exothermic",
    explanation: "Silver chloride precipitates as a white solid due to its low solubility in water.",
  },
  {
    reactants: ["BaCl2", "Na2SO4"],
    products: ["BaSO4", "NaCl"],
    balanced_equation: "BaCl2 + Na2SO4 → BaSO4↓ + 2NaCl",
    reaction_type: "Precipitation",
    conditions: "Room temperature, aqueous solution",
    energy_change: "Exothermic",
    explanation: "Barium sulfate forms as a white precipitate, highly insoluble in water.",
  },
  {
    reactants: ["Pb(NO3)2", "KI"],
    products: ["PbI2", "KNO3"],
    balanced_equation: "Pb(NO3)2 + 2KI → PbI2↓ + 2KNO3",
    reaction_type: "Precipitation",
    conditions: "Room temperature",
    energy_change: "Exothermic",
    explanation: "Lead iodide precipitates as bright yellow crystals.",
  },

  // Combustion Reactions
  {
    reactants: ["CH4", "O2"],
    products: ["CO2", "H2O"],
    balanced_equation: "CH4 + 2O2 → CO2 + 2H2O",
    reaction_type: "Combustion",
    conditions: "High temperature, ignition source",
    energy_change: "Highly exothermic (-890 kJ/mol)",
    explanation: "Complete combustion of methane produces carbon dioxide and water vapor.",
  },
  {
    reactants: ["C2H6", "O2"],
    products: ["CO2", "H2O"],
    balanced_equation: "2C2H6 + 7O2 → 4CO2 + 6H2O",
    reaction_type: "Combustion",
    conditions: "High temperature, ignition",
    energy_change: "Highly exothermic",
    explanation: "Ethane burns completely in oxygen to produce CO2 and water.",
  },
  {
    reactants: ["C3H8", "O2"],
    products: ["CO2", "H2O"],
    balanced_equation: "C3H8 + 5O2 → 3CO2 + 4H2O",
    reaction_type: "Combustion",
    conditions: "High temperature, spark",
    energy_change: "Highly exothermic (-2220 kJ/mol)",
    explanation: "Propane combustion is used in gas grills and heating systems.",
  },

  // Single Displacement Reactions
  {
    reactants: ["Zn", "HCl"],
    products: ["ZnCl2", "H2"],
    balanced_equation: "Zn + 2HCl → ZnCl2 + H2↑",
    reaction_type: "Single Displacement",
    conditions: "Room temperature",
    energy_change: "Exothermic",
    explanation: "Zinc displaces hydrogen from hydrochloric acid, producing hydrogen gas.",
  },
  {
    reactants: ["Cu", "AgNO3"],
    products: ["Cu(NO3)2", "Ag"],
    balanced_equation: "Cu + 2AgNO3 → Cu(NO3)2 + 2Ag",
    reaction_type: "Single Displacement",
    conditions: "Room temperature, aqueous solution",
    energy_change: "Exothermic",
    explanation: "Copper displaces silver from silver nitrate solution, forming metallic silver.",
  },
  {
    reactants: ["Fe", "CuSO4"],
    products: ["FeSO4", "Cu"],
    balanced_equation: "Fe + CuSO4 → FeSO4 + Cu",
    reaction_type: "Single Displacement",
    conditions: "Room temperature",
    energy_change: "Exothermic",
    explanation: "Iron displaces copper from copper sulfate, depositing metallic copper.",
  },

  // Synthesis Reactions
  {
    reactants: ["H2", "O2"],
    products: ["H2O"],
    balanced_equation: "2H2 + O2 → 2H2O",
    reaction_type: "Synthesis",
    conditions: "High temperature or catalyst",
    energy_change: "Highly exothermic (-286 kJ/mol)",
    explanation: "Hydrogen and oxygen combine to form water in an explosive reaction.",
  },
  {
    reactants: ["Na", "Cl2"],
    products: ["NaCl"],
    balanced_equation: "2Na + Cl2 → 2NaCl",
    reaction_type: "Synthesis",
    conditions: "High temperature",
    energy_change: "Highly exothermic (-411 kJ/mol)",
    explanation: "Sodium metal reacts violently with chlorine gas to form sodium chloride.",
  },
  {
    reactants: ["N2", "H2"],
    products: ["NH3"],
    balanced_equation: "N2 + 3H2 → 2NH3",
    reaction_type: "Synthesis (Haber Process)",
    conditions: "High pressure (200 atm), high temperature (450°C), iron catalyst",
    energy_change: "Exothermic (-92 kJ/mol)",
    explanation: "Industrial synthesis of ammonia using the Haber process.",
  },
   {
    reactants: ["Prakshep", "Goswami"],
    products: ["Prakshepgoswami@gmail.com"],
    balanced_equation: "Sitaram",
    reaction_type: "9713494990",
    conditions: "So So",
    energy_change: "Highly friendly 1008",
    explanation: "Congratulations! you know can meet creator soon....",
  },
     {
    reactants: ["Pratham", "Jaiswal"],
    products: ["Prathmick@gmail.com"],
    balanced_equation: "Jai Shree Ram",
    reaction_type: "9993062976",
    conditions: "Positive",
    energy_change: "Highly Active",
    explanation: "The Panda Lover Gang !!!!!.",
  },
     {
    reactants: ["Yuvraj", "Pandey"],
    products: ["yuvrajpandey155@gmail.com"],
    balanced_equation: "Jai Jagannath",
    reaction_type: "7898276595",
    conditions: "Tight",
    energy_change: "Negative",
    explanation: "The Charger Boiiii",
  },
  

  // Decomposition Reactions
  {
    reactants: ["H2O2"],
    products: ["H2O", "O2"],
    balanced_equation: "2H2O2 → 2H2O + O2↑",
    reaction_type: "Decomposition",
    conditions: "Catalyst (MnO2) or heat",
    energy_change: "Exothermic",
    explanation: "Hydrogen peroxide decomposes into water and oxygen gas.",
  },
  {
    reactants: ["CaCO3"],
    products: ["CaO", "CO2"],
    balanced_equation: "CaCO3 → CaO + CO2↑",
    reaction_type: "Thermal Decomposition",
    conditions: "High temperature (900°C)",
    energy_change: "Endothermic (+178 kJ/mol)",
    explanation: "Limestone decomposes to form lime and carbon dioxide when heated.",
  },
  {
    reactants: ["NaHCO3"],
    products: ["Na2CO3", "H2O", "CO2"],
    balanced_equation: "2NaHCO3 → Na2CO3 + H2O + CO2↑",
    reaction_type: "Thermal Decomposition",
    conditions: "Heat (300°C)",
    energy_change: "Endothermic",
    explanation: "Sodium bicarbonate (baking soda) decomposes when heated.",
  },

  // Double Displacement Reactions
  {
    reactants: ["AgNO3", "NaCl"],
    products: ["AgCl", "NaNO3"],
    balanced_equation: "AgNO3 + NaCl → AgCl↓ + NaNO3",
    reaction_type: "Double Displacement",
    conditions: "Room temperature, aqueous",
    energy_change: "Slightly exothermic",
    explanation: "Silver nitrate and sodium chloride exchange ions to form silver chloride precipitate.",
  },

  // Redox Reactions
  {
    reactants: ["Zn", "CuSO4"],
    products: ["ZnSO4", "Cu"],
    balanced_equation: "Zn + CuSO4 → ZnSO4 + Cu",
    reaction_type: "Redox (Single Displacement)",
    conditions: "Room temperature",
    energy_change: "Exothermic (-219 kJ/mol)",
    explanation: "Zinc is oxidized while copper is reduced. Zinc loses electrons, copper gains them.",
  },

  // Organic Reactions
  {
    reactants: ["C2H4", "H2"],
    products: ["C2H6"],
    balanced_equation: "C2H4 + H2 → C2H6",
    reaction_type: "Addition (Hydrogenation)",
    conditions: "High pressure, nickel catalyst, 150°C",
    energy_change: "Exothermic (-137 kJ/mol)",
    explanation: "Ethylene undergoes hydrogenation to form ethane.",
  },
  {
    reactants: ["C2H5OH", "O2"],
    products: ["CH3COOH", "H2O"],
    balanced_equation: "C2H5OH + O2 → CH3COOH + H2O",
    reaction_type: "Oxidation",
    conditions: "Catalyst, controlled temperature",
    energy_change: "Exothermic",
    explanation: "Ethanol is oxidized to acetic acid in the presence of oxygen.",
  },

  // More Complex Reactions
  {
    reactants: ["Al", "Fe2O3"],
    products: ["Al2O3", "Fe"],
    balanced_equation: "2Al + Fe2O3 → Al2O3 + 2Fe",
    reaction_type: "Thermite Reaction",
    conditions: "Very high temperature (2500°C), magnesium ignition",
    energy_change: "Highly exothermic (-852 kJ/mol)",
    explanation: "Aluminum reduces iron oxide in an extremely exothermic reaction used for welding.",
  },
  {
    reactants: ["Ca", "H2O"],
    products: ["Ca(OH)2", "H2"],
    balanced_equation: "Ca + 2H2O → Ca(OH)2 + H2↑",
    reaction_type: "Metal-Water Reaction",
    conditions: "Room temperature",
    energy_change: "Exothermic",
    explanation: "Calcium reacts with water to form calcium hydroxide and hydrogen gas.",
  },
  {
    reactants: ["Mg", "HCl"],
    products: ["MgCl2", "H2"],
    balanced_equation: "Mg + 2HCl → MgCl2 + H2↑",
    reaction_type: "Single Displacement",
    conditions: "Room temperature",
    energy_change: "Exothermic",
    explanation: "Magnesium displaces hydrogen from hydrochloric acid.",
  },
  {
    reactants: ["Al", "Cl2"],
    products: ["AlCl3"],
    balanced_equation: "2Al + 3Cl2 → 2AlCl3",
    reaction_type: "Synthesis",
    conditions: "High temperature",
    energy_change: "Highly exothermic",
    explanation: "Aluminum reacts with chlorine gas to form aluminum chloride.",
  },
  {
    reactants: ["Fe", "S"],
    products: ["FeS"],
    balanced_equation: "Fe + S → FeS",
    reaction_type: "Synthesis",
    conditions: "Heat required",
    energy_change: "Exothermic",
    explanation: "Iron and sulfur combine to form iron sulfide when heated.",
  },

  // More specific synthesis reactions
  {
    reactants: ["Mg", "O2"],
    products: ["MgO"],
    balanced_equation: "2Mg + O2 → 2MgO",
    reaction_type: "Oxidation Synthesis",
    conditions: "High temperature, ignition",
    energy_change: "Highly exothermic (-602 kJ/mol)",
    explanation: "Magnesium burns in oxygen with a bright white flame to form magnesium oxide.",
  },
  {
    reactants: ["Li", "Cl2"],
    products: ["LiCl"],
    balanced_equation: "2Li + Cl2 → 2LiCl",
    reaction_type: "Synthesis",
    conditions: "High temperature",
    energy_change: "Highly exothermic",
    explanation: "Lithium reacts with chlorine gas to form lithium chloride.",
  },
  {
    reactants: ["K", "Br2"],
    products: ["KBr"],
    balanced_equation: "2K + Br2 → 2KBr",
    reaction_type: "Synthesis",
    conditions: "Room temperature",
    energy_change: "Highly exothermic",
    explanation: "Potassium reacts with bromine to form potassium bromide.",
  },
  {
    reactants: ["Al", "O2"],
    products: ["Al2O3"],
    balanced_equation: "4Al + 3O2 → 2Al2O3",
    reaction_type: "Oxidation Synthesis",
    conditions: "High temperature",
    energy_change: "Highly exothermic",
    explanation: "Aluminum oxidizes to form aluminum oxide (alumina).",
  },
  {
    reactants: ["P", "O2"],
    products: ["P2O5"],
    balanced_equation: "4P + 5O2 → 2P2O5",
    reaction_type: "Combustion Synthesis",
    conditions: "Ignition temperature",
    energy_change: "Highly exothermic",
    explanation: "Phosphorus burns in oxygen to form phosphorus pentoxide.",
  },
  {
    reactants: ["S", "O2"],
    products: ["SO2"],
    balanced_equation: "S + O2 → SO2",
    reaction_type: "Combustion Synthesis",
    conditions: "High temperature",
    energy_change: "Exothermic (-297 kJ/mol)",
    explanation: "Sulfur burns in oxygen to form sulfur dioxide gas.",
  },
  {
    reactants: ["C", "O2"],
    products: ["CO2"],
    balanced_equation: "C + O2 → CO2",
    reaction_type: "Combustion",
    conditions: "High temperature, sufficient oxygen",
    energy_change: "Exothermic (-394 kJ/mol)",
    explanation: "Carbon burns completely in oxygen to form carbon dioxide.",
  },
  {
    reactants: ["H2", "Cl2"],
    products: ["HCl"],
    balanced_equation: "H2 + Cl2 → 2HCl",
    reaction_type: "Synthesis",
    conditions: "Light or heat catalyst",
    energy_change: "Exothermic (-184 kJ/mol)",
    explanation: "Hydrogen and chlorine combine explosively to form hydrogen chloride gas.",
  },
  {
    reactants: ["NH3", "HCl"],
    products: ["NH4Cl"],
    balanced_equation: "NH3 + HCl → NH4Cl",
    reaction_type: "Acid-Base Synthesis",
    conditions: "Room temperature",
    energy_change: "Exothermic",
    explanation: "Ammonia gas reacts with hydrogen chloride to form white ammonium chloride smoke.",
  },
  {
    reactants: ["CaO", "H2O"],
    products: ["Ca(OH)2"],
    balanced_equation: "CaO + H2O → Ca(OH)2",
    reaction_type: "Hydration Synthesis",
    conditions: "Room temperature",
    energy_change: "Highly exothermic (-65 kJ/mol)",
    explanation: "Calcium oxide (quicklime) reacts with water to form calcium hydroxide (slaked lime).",
  },
  {
    reactants: ["SO3", "H2O"],
    products: ["H2SO4"],
    balanced_equation: "SO3 + H2O → H2SO4",
    reaction_type: "Hydration Synthesis",
    conditions: "Room temperature",
    energy_change: "Highly exothermic",
    explanation: "Sulfur trioxide reacts with water to form sulfuric acid.",
  },
  {
    reactants: ["CO2", "H2O"],
    products: ["H2CO3"],
    balanced_equation: "CO2 + H2O → H2CO3",
    reaction_type: "Hydration Synthesis",
    conditions: "Room temperature, pressure",
    energy_change: "Slightly exothermic",
    explanation: "Carbon dioxide dissolves in water to form carbonic acid (weak and unstable).",
  },
  {
    reactants: ["Li", "H2O"],
    products: ["LiOH", "H2"],
    balanced_equation: "2Li + 2H2O → 2LiOH + H2↑",
    reaction_type: "Metal-Water Reaction",
    conditions: "Room temperature",
    energy_change: "Exothermic",
    explanation: "Lithium reacts with water to form lithium hydroxide and hydrogen gas.",
  },
  {
    reactants: ["Ba", "H2O"],
    products: ["Ba(OH)2", "H2"],
    balanced_equation: "Ba + 2H2O → Ba(OH)2 + H2↑",
    reaction_type: "Metal-Water Reaction",
    conditions: "Room temperature",
    energy_change: "Exothermic",
    explanation: "Barium reacts with water to form barium hydroxide and hydrogen gas.",
  },
  {
    reactants: ["Al", "HCl"],
    products: ["AlCl3", "H2"],
    balanced_equation: "2Al + 6HCl → 2AlCl3 + 3H2↑",
    reaction_type: "Single Displacement",
    conditions: "Room temperature",
    energy_change: "Exothermic",
    explanation: "Aluminum displaces hydrogen from hydrochloric acid to form aluminum chloride.",
  },
  {
    reactants: ["Pb", "AgNO3"],
    products: ["Pb(NO3)2", "Ag"],
    balanced_equation: "Pb + 2AgNO3 → Pb(NO3)2 + 2Ag",
    reaction_type: "Single Displacement",
    conditions: "Room temperature, aqueous solution",
    energy_change: "Exothermic",
    explanation: "Lead displaces silver from silver nitrate solution.",
  },
  {
    reactants: ["Sn", "HCl"],
    products: ["SnCl2", "H2"],
    balanced_equation: "Sn + 2HCl → SnCl2 + H2↑",
    reaction_type: "Single Displacement",
    conditions: "Room temperature",
    energy_change: "Exothermic",
    explanation: "Tin displaces hydrogen from hydrochloric acid to form tin(II) chloride.",
  },
]

export function findReaction(reactant1: string, reactant2?: string): ReactionData | null {
  const normalizeFormula = (formula: string) =>
    formula
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (match) => {
        const subscripts = "₀₁₂₃₄₅₆₇₈₉"
        const numbers = "0123456789"
        return numbers[subscripts.indexOf(match)]
      })

  const r1 = normalizeFormula(reactant1)
  const r2 = reactant2 ? normalizeFormula(reactant2) : null

  // Only return exact matches - no partial matching
  return (
    reactionDatabase.find((reaction) => {
      const normalizedReactants = reaction.reactants.map(normalizeFormula)

      if (r2) {
        // For two reactants, both must match exactly
        return (
          (normalizedReactants.includes(r1) && normalizedReactants.includes(r2)) ||
          (normalizedReactants.includes(r2) && normalizedReactants.includes(r1))
        )
      } else {
        // For single reactant, must match exactly
        return normalizedReactants.includes(r1) && normalizedReactants.length === 1
      }
    }) || null
  )
}
