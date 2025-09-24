# Capital Story Craft — Vibrant Capital Website

Modern React + Vite site with full Arabic Right‑to‑Left (RTL) support, language-aware routing, and a persistent language toggle.

## Key Features

- Arabic RTL version of the entire site with Modern Standard Arabic translations
- Language toggle in the footer: العربية / English (persists via localStorage)
- Language-aware routing using React Router
  - English: `/`, `/about`, `/investments`, `/sectors`, `/for-investors`, `/contact`, `/legal`
  - Arabic: `/ar`, `/ar/about`, `/ar/investments`, `/ar/sectors`, `/ar/for-investors`, `/ar/contact`, `/ar/legal`
- Global Language Context to keep the app in sync with URL and user preference
- Dynamic `<html dir>` and `<html lang>` switching (RTL/LTR)
- Cairo font auto-applied for Arabic (`html[dir="rtl"]`)
- Tailwind utilities adapted for RTL (text alignment, flex row reverse, spacing)

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- React Router DOM
- @tanstack/react-query

## Getting Started (Local Development)

Prereqs: Node.js 18+ and npm.

```sh
# 1) Install dependencies
npm install

# 2) Run the dev server (works on Windows/macOS/Linux)
npx vite --host --port 5173

# If you prefer package scripts and have vite installed locally
# npm run dev
```

Open your browser at `http://localhost:5173/`.

## Deployment to Lovable

✅ **Ready for Lovable deployment!** This project is configured to work seamlessly with Lovable's build process:

- **Production Build**: Uses `npm run build` (Vite build only, no testing dependencies required)
- **RTL Support**: All Arabic pages properly aligned for RTL display
- **Language Routing**: Both English (`/`) and Arabic (`/ar/*`) routes work correctly
- **No Test Dependencies**: Testing tools are in `devDependencies` and won't interfere with production builds

The site will automatically deploy with proper Arabic RTL support when pushed to your connected Lovable repository.

### View Languages

- English: `http://localhost:5173/`
- Arabic: `http://localhost:5173/ar`

You can also toggle language from the footer. The app stores your preference and updates the URL automatically.

## Project Structure Highlights

- `src/contexts/LanguageContext.tsx`: Global language state, URL sync, and localStorage persistence
- `src/App.tsx`: Routing, and sets `<html dir>` / `<html lang>` based on active language
- `src/components/ui/navigation.tsx`: Language-aware nav with RTL adjustments
- `src/components/ui/footer.tsx`: Footer with language toggle and localized links
- `src/pages/*`: Localized pages (Home, About, Investments, Sectors, For Investors, Contact, Legal)
- `src/index.css`: Applies Cairo font when `dir="rtl"`
- `index.html`: Loads Cairo font from Google Fonts

## Build for Production

```sh
npm run build
npm run preview
```

`npm run preview` will serve the production build, usually at `http://localhost:4173`.

## Notes

- The Arabic version keeps the same visuals and branding; only text direction, font, and translations change.
- No English words remain when Arabic is active. If you spot any, switch to Arabic and report the section; update the corresponding page component.

## Original Lovable Project

Project URL: https://lovable.dev/projects/3b535d2b-1e41-4337-8ab2-0db4dd6117cd

## Live Page

- Arabic For Investors: https://vibrant-capital-website.lovable.app/ar/for-investors