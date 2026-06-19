# EvoLab Website

https://aryaanmishra.github.io/evolab.github.io/

This is the official website for the EvoLab research group, built with Next.js, React 19, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build

Build for static export:

```bash
npm run build
```

This creates an optimized production build in the `out` directory.

## Deployment

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

#### Option 1: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages whenever you push to the `main` or `master` branch.

1. Push your changes to GitHub:
   ```bash
   git push origin main
   ```

2. GitHub Actions will automatically build and deploy your site.

3. Your site will be available at `https://yourusername.github.io/ExpoReact-main` (or your custom domain)

#### Option 2: Manual Deployment

If you want to deploy manually:

```bash
npm run deploy
```

This will build the project and deploy it to GitHub Pages using the `gh-pages` package.

Note: You must have `gh-pages` installed (already in devDependencies) and your GitHub credentials configured.

### GitHub Pages Configuration

To enable GitHub Pages:

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set the source to "GitHub Actions" (or "Deploy from a branch" if using manual deployment)
4. If deploying to a subdirectory, update the `basePath` in `next.config.mjs`

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── contact/           # Contact page
│   ├── media/             # Media page
│   ├── people/            # People page
│   ├── publications/      # Publications page
│   └── research/          # Research pages
├── components/            # Reusable React components
│   └── ui/               # Radix UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
├── styles/                # Global styles
└── next.config.mjs        # Next.js configuration
```

## Technologies

- **Framework**: Next.js 16
- **React**: 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Zod validation

## Features

- Static site generation (SSG) for fast performance
- Responsive design with Tailwind CSS
- Interactive components with Radix UI
- Form validation with Zod
- Optimized images with next/image
- Smooth animations with Framer Motion
