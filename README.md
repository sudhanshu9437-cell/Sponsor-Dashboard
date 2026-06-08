# 🏆 Hackathon Sponsor Dashboard

A responsive, interactive sponsor management dashboard built with **React + Vite + Tailwind CSS**. Search, filter, and explore hackathon sponsors by tier, contribution, and more — all driven by a clean JSON data layer.

🔗 **Live Demo:** [https://sudhanshu9437-cell.github.io/Sponsor-Dashboard/](https://sudhanshu9437-cell.github.io/Sponsor-Dashboard/)

---

## 📸 Preview

> A clean dashboard UI showcasing sponsor cards, search functionality, tier-based filtering, and real-time stats.

---

## ✨ Features

- 🔍 **Live Search** — Instantly filter sponsors by name as you type
- 🏅 **Tier Filtering** — Filter by Gold, Silver, Bronze, and other sponsorship tiers
- 📊 **Stats Overview** — Key metrics displayed via summary stat cards
- 💳 **Sponsor Cards** — Each sponsor rendered as a card with name, tier, and contribution details
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop
- ⚡ **Fast & Lightweight** — Powered by Vite for near-instant dev and build times

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | Component-based UI |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [GitHub Pages](https://pages.github.com/) | Static site deployment |

---

## 📁 Project Structure

```
Sponsor-Dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx       # Controlled search input
│   │   ├── FilterBar.jsx       # Tier filter buttons
│   │   ├── SponsorCard.jsx     # Individual sponsor card
│   │   ├── SponsorGrid.jsx     # Grid layout for cards
│   │   └── StatCard.jsx        # Summary stat display
│   ├── data/
│   │   └── sponsors.json       # Sponsor data source
│   ├── App.jsx                 # Root component & state management
│   └── main.jsx                # Entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sudhanshu9437-cell/Sponsor-Dashboard.git

# 2. Navigate into the project
cd Sponsor-Dashboard

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

> Deployment uses the `gh-pages` package. The `base` path in `vite.config.js` is set to `/Sponsor-Dashboard/` to match the GitHub Pages URL.

---

## ⚙️ Vite Config Note

```js
// vite.config.js
export default defineConfig({
  base: '/Sponsor-Dashboard/',
  plugins: [react()],
})
```

This is required for GitHub Pages to correctly resolve assets.

---

## 🧠 Key React Concepts Used

- **State Lifting** — Search and filter state managed in `App.jsx` and passed down as props
- **Controlled Components** — `SearchBar` and `FilterBar` are fully controlled inputs
- **Props-driven Rendering** — `SponsorGrid` and `SponsorCard` are pure presentational components
- **Conditional Rendering** — Cards filtered dynamically based on search query and selected tier
- **JSON Data Layer** — All sponsor data lives in `sponsors.json` for easy updates

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Sudhanshu** — built as a first React frontend project.  
⭐ If you found this useful, give the repo a star!
