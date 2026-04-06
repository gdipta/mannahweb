# Mannah Creative Village — Web Project

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- lucide-react (icons)

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open browser at http://localhost:5173
```

---

## 🌐 How to Deploy to Vercel

### Option A — Via GitHub (Recommended)

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/mannah-web.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**

3. Import your GitHub repo

4. Vercel will auto-detect Vite. Confirm these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

5. Click **Deploy** ✅

### Option B — Via Vercel CLI

```bash
npm install -g vercel
vercel
```

---

## 📁 Project Structure

```
mannah-web/
├── index.html          ← HTML entry point
├── vite.config.js      ← Vite config
├── tailwind.config.js  ← Tailwind config
├── postcss.config.js   ← PostCSS config
├── package.json        ← Dependencies
├── vercel.json         ← Vercel SPA routing config
└── src/
    ├── main.jsx        ← React entry point
    ├── index.css       ← Tailwind CSS
    └── App.jsx         ← Your main component (from manweb.html)
```
