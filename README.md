# ⚗️ Chemical Reaction Predictor

A modern web app that predicts chemical reactions using **AI-powered analysis**.  
Built with **Next.js, TypeScript, and Tailwind CSS**, featuring a database of **70+ reactions** and **premium API integration** for advanced predictions.

---

## ✨ Features

- 🔮 **Reaction Prediction** – Enter chemical formulas or names to predict outcomes  
- 📚 **70+ Preloaded Reactions** – Covers all major reaction categories  
- ⚡ **Balanced Equations** – Auto-generates balanced chemical equations  
- 🧑‍🔬 **Detailed Analysis** – Explains type, conditions & feasibility  
- 🎨 **Modern UI** – Responsive, accessible design with dark mode  
- 🚀 **Real-time AI** – Instant predictions via OpenAI API  

---

## 🔬 Supported Reaction Types

- **Acid-Base Neutralization**  
- **Precipitation & Double Displacement**  
- **Combustion Reactions**  
- **Single Displacement**  
- **Synthesis & Decomposition**  
- **Metal-Water Reactions**  
- **Thermite Reactions**  

---

## 🚀 Getting Started

### Prerequisites
- Node.js **18+**
- npm or yarn
- OpenAI API key (for premium predictions)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/prakshep-goswami/chemical-reaction-predictor.git
cd chemical-reaction-predictor

# 2. Install dependencies
npm install   # or yarn install

# 3. Configure environment
cp .env.example .env.local
# Add your key:
# OPENAI_API_KEY=your_openai_api_key_here

# 4. Run locally
npm run dev   # or yarn dev
```

Now open **[http://localhost:3000](http://localhost:3000)** 🎉

---

## 💡 Usage

### 🔎 Basic Prediction
1. Enter two reactants  
2. Click **Predict Reaction**  
3. View the products, balanced equation, and explanation  

### 📘 Example Reactions
- Browse categorized reactions under **Browse Examples**  
- Click one to auto-fill inputs  
- Get feasibility, balanced equation & detailed reasoning  

### ✅ Input Formats
- Formulas: `NaCl`, `H2SO4`, `CaCO3`  
- Symbols: `Na`, `Cl2`, `O2`  
- Names: `water`, `salt`, `baking soda`  

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14, React 18, TypeScript  
- **Styling**: Tailwind CSS v4 + shadcn/ui  
- **AI**: OpenAI API (for advanced predictions)  
- **Icons**: Lucide React  
- **Deployment**: Vercel  

---

## 📂 Project Structure

| Path / File                 | Description |
|-----------------------------|-------------|
| `app/`                      | Next.js App Router – main app logic |
| ├── `actions.ts`            | Server actions (AI prediction logic) |
| ├── `globals.css`           | Global styles & Tailwind config |
| ├── `layout.tsx`            | Root layout with Inter font |
| ├── `page.tsx`              | Main prediction interface |
| ├── `components/`           | Reusable UI components |
| ├── `ui/`                   | shadcn/ui component library |
| ├── `theme-provider.tsx`    | Dark/Light mode context |
| `lib/utils.ts`              | Utility helpers (e.g. Tailwind `cn()`) |
| `hooks/`                    | Custom React hooks (`use-toast`, `use-mobile`) |
| `public/`                   | Static assets (favicon, images) |
| `.env.local`                | API keys (ignored by Git) |
| `package.json`              | Dependencies & scripts |
| `tsconfig.json`             | TypeScript configuration |

---

## 🔧 Configuration

### Environment Variables

| Variable        | Description                      | Required |
|-----------------|----------------------------------|----------|
| `OPENAI_API_KEY`| OpenAI API key for AI predictions| ✅ Yes   |

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub  
2. Connect repo to Vercel  
3. Add environment variables (`OPENAI_API_KEY`) in dashboard  
4. Deploy – updates automatically on push  

### Manual
```bash
npm run build
npm start
```

---

## 🤝 Contributing

1. Fork the repo  
2. Create a branch (`git checkout -b feature/awesome-feature`)  
3. Commit (`git commit -m "Add awesome feature"`)  
4. Push (`git push origin feature/awesome-feature`)  
5. Open a Pull Request  

---

## 📬 Support

- **Issues**: [GitHub Issues](https://github.com/prakshep-goswami/chemical-reaction-predictor/issues)  
- **Discussions**: [GitHub Discussions](https://github.com/prakshep-goswami/chemical-reaction-predictor/discussions)  
- **Email**: prakshepgoswami@gmail.com | ppyenterprises@gmail.com  

---

🚀 *Build, predict, and explore chemical reactions with AI!*
