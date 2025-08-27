"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Flag as Flask, AlertTriangle, CheckCircle, Shuffle, BookOpen, Zap } from "lucide-react"
import { predictReaction, getRandomReaction, type ReactionResult } from "./actions"

export default function ChemicalReactionPredictor() {
  const [result, setResult] = useState<ReactionResult | null>(null)
  const [error, setError] = useState("")
  const [isPending, startTransition] = useTransition()

  // Add state for form inputs
  const [reactant1, setReactant1] = useState("")
  const [reactant2, setReactant2] = useState("")
  const [activeTab, setActiveTab] = useState("predict")

  const handleSubmit = async (formData: FormData) => {
    setError("")
    setResult(null)

    startTransition(async () => {
      try {
        const prediction = await predictReaction(formData)
        setResult(prediction)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      }
    })
  }

  const handleRandomReaction = () => {
    startTransition(async () => {
      try {
        const randomResult = await getRandomReaction()
        setResult(randomResult)
        setError("")
      } catch (err) {
        setError("Failed to get random reaction")
      }
    })
  }

  // Updated handleExampleClick function
  const handleExampleClick = (r1: string, r2: string) => {
    console.log("Example clicked:", r1, r2) // Debug log
    setReactant1(r1)
    setReactant2(r2)
    setActiveTab("predict") // Switch to predict tab
    setError("") // Clear any errors
    setResult(null) // Clear previous results
  }

  const exampleReactions = [
    // Simple synthesis reactions that show clear products
    { r1: "Na", r2: "Cl2", type: "Synthesis", description: "Sodium + Chlorine → NaCl" },
    { r1: "Mg", r2: "O2", type: "Synthesis", description: "Magnesium + Oxygen → MgO" },
    { r1: "H2", r2: "Cl2", type: "Synthesis", description: "Hydrogen + Chlorine → HCl" },
    { r1: "CaO", r2: "H2O", type: "Synthesis", description: "Quicklime + Water → Ca(OH)2" },
    { r1: "prakshep", r2: "goswami", type: "Synthesis", description: "Congratulation! You know creator code." },

    // Acid-Base
    { r1: "HCl", r2: "NaOH", type: "Acid-Base", description: "Strong acid + strong base → NaCl + H2O" },
    { r1: "H2SO4", r2: "NaOH", type: "Acid-Base", description: "Sulfuric acid + base → Na2SO4 + H2O" },
    { r1: "CH3COOH", r2: "NaOH", type: "Acid-Base", description: "Acetic acid + base → CH3COONa + H2O" },
    { r1: "NH3", r2: "HCl", type: "Acid-Base", description: "Ammonia + HCl → NH4Cl" },

    // Precipitation
    { r1: "NaCl", r2: "AgNO3", type: "Precipitation", description: "Silver chloride precipitate" },
    { r1: "BaCl2", r2: "Na2SO4", type: "Precipitation", description: "Barium sulfate precipitate" },
    { r1: "Pb(NO3)2", r2: "KI", type: "Precipitation", description: "Lead iodide precipitate" },

    // Combustion
    { r1: "CH4", r2: "O2", type: "Combustion", description: "Methane combustion → CO2 + H2O" },
    { r1: "C2H6", r2: "O2", type: "Combustion", description: "Ethane combustion" },
    { r1: "C", r2: "O2", type: "Combustion", description: "Carbon + Oxygen → CO2" },

    // Single Displacement
    { r1: "Zn", r2: "HCl", type: "Single Displacement", description: "Zinc + acid → ZnCl2 + H2" },
    { r1: "Cu", r2: "AgNO3", type: "Single Displacement", description: "Copper displaces silver" },
    { r1: "Fe", r2: "CuSO4", type: "Single Displacement", description: "Iron displaces copper" },
    { r1: "Al", r2: "HCl", type: "Single Displacement", description: "Aluminum + acid → AlCl3 + H2" },

    // Metal-Water reactions
    { r1: "Ca", r2: "H2O", type: "Metal-Water", description: "Calcium + water → Ca(OH)2 + H2" },
    { r1: "Li", r2: "H2O", type: "Metal-Water", description: "Lithium + water → LiOH + H2" },

    // Decomposition (single reactant)
    { r1: "H2O2", r2: "", type: "Decomposition", description: "H2O2 → H2O + O2" },
    { r1: "CaCO3", r2: "", type: "Decomposition", description: "Limestone → CaO + CO2" },
    { r1: "NaHCO3", r2: "", type: "Decomposition", description: "Baking soda decomposition" },

    // Special Reactions
    { r1: "Al", r2: "Fe2O3", type: "Thermite", description: "Thermite reaction → Al2O3 + Fe" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Flask className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Chemical Reaction Predictor</h1>
          </div>
          <p className="text-gray-600">Free database with 70+ reactions - Premium API for advanced predictions</p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="secondary" className="text-sm">
              <BookOpen className="h-3 w-3 mr-1" />
              70+ Free Reactions
            </Badge>
            <Badge variant="outline" className="text-sm">
              <Zap className="h-3 w-3 mr-1" />
              Premium API Available
            </Badge>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="predict">Predict Reaction</TabsTrigger>
            <TabsTrigger value="examples">Browse Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="predict" className="space-y-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Enter Reactants</CardTitle>
                <CardDescription>
                  Input chemical formulas (e.g., NaCl, H2SO4, CaCO3) or compound names. Free database covers common
                  reactions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="reactant1">Reactant 1</Label>
                      <Input
                        id="reactant1"
                        name="reactant1"
                        placeholder="e.g., NaCl"
                        required
                        disabled={isPending}
                        value={reactant1}
                        onChange={(e) => setReactant1(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reactant2">Reactant 2 (optional for decomposition)</Label>
                      <Input
                        id="reactant2"
                        name="reactant2"
                        placeholder="e.g., AgNO3"
                        disabled={isPending}
                        value={reactant2}
                        onChange={(e) => setReactant2(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" disabled={isPending} className="flex-1">
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Predicting...
                        </>
                      ) : (
                        <>
                          <Flask className="mr-2 h-4 w-4" />
                          Predict Reaction
                        </>
                      )}
                    </Button>
                    <Button type="button" variant="outline" onClick={handleRandomReaction} disabled={isPending}>
                      <Shuffle className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setReactant1("")
                        setReactant2("")
                        setResult(null)
                        setError("")
                      }}
                      disabled={isPending}
                    >
                      Clear
                    </Button>
                  </div>
                </form>

                {error && (
                  <Alert variant="destructive" className="mt-4">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {result && (
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {result.feasible ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    )}
                    Reaction Prediction
                    <Badge variant={result.feasible ? "default" : "destructive"}>
                      {result.feasible
                        ? "Feasible"
                        : result.reaction_type === "API Error"
                          ? "API Required"
                          : "Not Feasible"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Balanced Equation</Label>
                      <div
                        className={`mt-1 p-3 rounded-md font-mono text-lg border ${
                          result.reaction_type === "API Error" ? "bg-red-50 text-red-800" : "bg-gray-50"
                        }`}
                      >
                        {result.balanced_equation}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-700">Reaction Type</Label>
                        <div className="mt-1 p-2 bg-blue-50 rounded-md border">
                          <Badge variant={result.reaction_type === "API Error" ? "destructive" : "secondary"}>
                            {result.reaction_type}
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700">Products</Label>
                        <div className="mt-1 p-2 bg-green-50 rounded-md border">
                          {result.products.length > 0 ? result.products.join(", ") : "No products formed"}
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700">Explanation</Label>
                      <div
                        className={`mt-1 p-3 rounded-md border ${
                          result.reaction_type === "API Error" ? "bg-red-50" : "bg-gray-50"
                        }`}
                      >
                        {result.explanation}
                      </div>
                    </div>

                    {result.conditions && (
                      <div>
                        <Label className="text-sm font-medium text-gray-700">Reaction Conditions</Label>
                        <div className="mt-1 p-2 bg-yellow-50 rounded-md border">{result.conditions}</div>
                      </div>
                    )}

                    {result.energy_change && (
                      <div>
                        <Label className="text-sm font-medium text-gray-700">Energy Change</Label>
                        <div className="mt-1 p-2 bg-purple-50 rounded-md border">{result.energy_change}</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Example Reactions Database</CardTitle>
                <CardDescription>Click any example to auto-fill the form and switch to prediction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {[
                    "Acid-Base",
                    "Precipitation",
                    "Combustion",
                    "Single Displacement",
                    "Synthesis",
                    "Decomposition",
                    "Metal-Water",
                    "Thermite",
                  ].map((category) => (
                    <div key={category}>
                      <h3 className="font-semibold text-lg mb-2 text-gray-800">{category} Reactions</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {exampleReactions
                          .filter(
                            (ex) =>
                              ex.type.includes(category.split(" ")[0]) ||
                              (category === "Thermite" && ex.type.includes("Thermite")) ||
                              (category === "Metal-Water" && ex.type.includes("Metal-Water")),
                          )
                          .map((example, idx) => (
                            <Button
                              key={idx}
                              variant="outline"
                              onClick={() => handleExampleClick(example.r1, example.r2)}
                              className="p-3 h-auto text-left justify-start hover:bg-gray-50"
                              disabled={isPending}
                            >
                              <div className="w-full">
                                <div className="font-mono text-sm font-medium">
                                  {example.r1} {example.r2 && `+ ${example.r2}`}
                                </div>
                                <div className="text-xs text-gray-600 mt-1">{example.description}</div>
                                <Badge variant="outline" className="text-xs mt-1">
                                  {example.type}
                                </Badge>
                              </div>
                            </Button>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
