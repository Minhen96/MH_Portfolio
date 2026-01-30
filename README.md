# Portfolio Website

A modern, dynamic portfolio built with **Astro 5**, **Preact**, **Tailwind CSS**, and **Framer Motion**. Content is managed through **Astro Content Collections** for high performance and easy maintainability.

## 🚀 Features

-   **Content Collections**: All data (projects, skills, timeline, etc.) is stored in JSON files under `src/content/`.
-   **Dynamic Intro**: Smooth introductory sequence with skip capabilities, controlled via Nanostores.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
-   **Modern UI**: Glassmorphism, smooth gradients, and interactive animations.

## 📁 Project Structure

```text
/
├── public/              # Static assets (images, logos)
├── scripts/             # Utility scripts
│   └── generate_content.cjs # Script to regenerate content from source data
├── src/
│   ├── components/      # UI components (Astro & Preact)
│   ├── content/         # JSON data for projects, skills, timeline, etc.
│   ├── layouts/         # Page layouts
│   ├── pages/           # Main website pages
│   └── store/           # Client-side state (Nanostores)
└── package.json
```

## 🛠️ Commands

| Command             | Action                                      |
| :------------------ | :------------------------------------------ |
| `npm run dev`       | Starts local dev server at `localhost:4321` |
| `npm run build`     | Build for production (outputs to `./dist/`) |
| `npm run generator` | Run `node scripts/generate_content.cjs`     |

## 📝 Content Management

To update your portfolio, edit the JSON files in `src/content/`:
-   **Projects**: `src/content/projects/`
-   **Skills**: `src/content/skills/`
-   **Timeline**: `src/content/timeline/` (Experience & Education)
-   **Hackathons**: `src/content/hackathons/`
-   **Site Config**: `src/content/site_config/` (Personal info, social links)

## ⚠️ Troubleshooting (Windows)

If you see an error like `EPERM: permission denied, rename ... .astro\data-store.json.tmp` while running `npm run dev`:

1.  **Stop the dev server** (`Ctrl + C`).
2.  **Delete the `.astro/` folder** in the project root.
3.  **Restart the dev server** with `npm run dev`.

This happens on Windows when Astro tries to update its internal cache while the dev server has a lock on the files.
