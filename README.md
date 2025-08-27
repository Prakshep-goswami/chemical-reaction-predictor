# Chemical Reaction Predictor

A modern web application that predicts chemical reactions using AI-powered analysis. Built with Next.js, TypeScript, and Tailwind CSS, featuring a comprehensive database of 70+ common reactions with premium API integration for advanced predictions.

## 🧪 Features

- **Reaction Prediction**: Input chemical formulas or compound names to predict reaction outcomes
- **Comprehensive Database**: 70+ pre-loaded reactions covering major reaction types
- **Interactive Examples**: Browse and test reactions by category with one-click auto-fill
- **Balanced Equations**: Automatically generates balanced chemical equations
- **Reaction Analysis**: Provides detailed explanations, reaction types, and conditions
- **Modern UI**: Clean, responsive interface with dark mode support
- **Real-time Processing**: Instant predictions with loading states and error handling

## 🔬 Supported Reaction Types

- **Acid-Base Reactions**: Strong and weak acid-base neutralizations
- **Precipitation Reactions**: Formation of insoluble compounds
- **Combustion Reactions**: Hydrocarbon and element combustion
- **Single Displacement**: Metal displacement reactions
- **Synthesis Reactions**: Formation of compounds from elements
- **Decomposition Reactions**: Breaking down of compounds
- **Metal-Water Reactions**: Alkali and alkaline earth metal reactions
- **Thermite Reactions**: High-temperature metal oxide reductions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key (for premium predictions)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/prakshep-goswami/chemical-reaction-predictor.git
   cd chemical-reaction-predictor
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   Add your OpenAI API key:
   \`\`\`
   OPENAI_API_KEY=your_openai_api_key_here
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💡 Usage

### Basic Prediction
1. Enter chemical formulas in the "Reactant 1" and "Reactant 2" fields
2. Click "Predict Reaction" to get results
3. View the balanced equation, products, and detailed explanation

### Example Reactions
1. Switch to the "Browse Examples" tab
2. Browse reactions by category
3. Click any example to auto-fill the prediction form
4. Results include reaction feasibility, balanced equations, and explanations

### Supported Input Formats
- **Chemical Formulas**: `NaCl`, `H2SO4`, `CaCO3`
- **Element Symbols**: `Na`, `Cl2`, `O2`
- **Common Names**: `water`, `salt`, `baking soda`

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **AI Integration**: OpenAI API for advanced predictions
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

\`\`\`
├── app/
│   ├── actions.ts          # Server actions for reaction prediction
│   ├── globals.css         # Global styles and Tailwind configuration
│   ├── layout.tsx          # Root layout with font configuration
│   └── page.tsx            # Main application component
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── theme-provider.tsx  # Theme context provider
├── lib/
│   └── utils.ts            # Utility functions
└── hooks/                  # Custom React hooks
\`\`\`

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for premium predictions | Yes |

### Customization

- **Add New Reactions**: Modify the `exampleReactions` array in `app/page.tsx`
- **Styling**: Update Tailwind classes or modify `app/globals.css`
- **API Integration**: Extend `app/actions.ts` for additional prediction services

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically on push

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/prakshep-goswami/chemical-reaction-predictor/issues)
- **Discussions**: [GitHub Discussions](https://github.com/prakshep-goswami/chemical-reaction-predictor/discussions)
- **Email**: prakshepgoswami@gmail.com , ppyenterprises@gmail.com


