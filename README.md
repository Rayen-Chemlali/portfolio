# Rayen Chemlali — Portfolio

Production-ready personal portfolio. Single HTML file, fully data-driven via `PORTFOLIO_DATA` JSON object.

## 🚀 Deploy to Vercel (30 seconds)

### Option 1 — Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

### Option 2 — Drag & Drop
Go to https://vercel.com/new → drag this folder → deploy.

### Option 3 — GitHub
1. Push this folder to a GitHub repo
2. Go to vercel.com → Import repo → Deploy

---

## ✏️ How to update content

Open `index.html` and find `const PORTFOLIO_DATA = {` at the top of the `<script>` tag.

**Add a new project:**
```js
// In PORTFOLIO_DATA.projects array, add:
{
  id: "my-new-project",
  name: "My Project",
  emoji: "🚀",
  tagline: { en: "Short description", fr: "Description courte" },
  accentColor: "#ff6b6b",
  watermark: "PRJ",
  status: { en: "Completed", fr: "Terminé" }, statusType: "done",
  duration: "2 months", team: "Solo",
  tech: ["React", "Node.js"],
  myRole: { en: "Solo developer", fr: "Développeur solo" },
  links: [{ label: "View Code", url: "https://github.com/..." }],
  tabs: {
    overview: { en: "...", fr: "..." },
    features: { en: ["Feature 1", "Feature 2"], fr: ["Fonctionnalité 1", "Fonctionnalité 2"] },
    challenges: { en: "...", fr: "..." },
    learnings: { en: "...", fr: "..." }
  }
}
```

**Add a new certification:**
```js
// In PORTFOLIO_DATA.certifications array, add:
{ name: "Cert Name", issuer: "Issuer", icon: "🎓", url: "https://..." }
```

**Add a new achievement:**
```js
// In PORTFOLIO_DATA.achievements array, add:
{
  place: "1st", medal: "🥇",
  title: { en: "Contest Name", fr: "Nom du Concours" },
  subtitle: { en: "Description", fr: "Description" },
  color: "#ffd700", url: "https://linkedin.com/..."
}
```

## 📁 Files
- `index.html` — The entire portfolio (HTML + CSS + JS)
- `vercel.json` — Vercel deployment config
- `robots.txt` — SEO crawler instructions
- `sitemap.xml` — SEO sitemap (update URL if domain changes)

## 🌐 After deploying
Update these values in `index.html`:
1. `<link rel="canonical" href="YOUR_DOMAIN">` 
2. `sitemap.xml` — replace `rayen-chemlali.dev` with your actual domain
3. `robots.txt` — replace sitemap URL with your actual domain
4. `PORTFOLIO_DATA.meta.cvUrl` — link to your actual CV PDF
