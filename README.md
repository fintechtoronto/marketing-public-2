# FintechToronto.com

A modern web application for Toronto's fintech community built with Next.js, Shadcn UI, and PayloadCMS.

## Features

- Dark theme by default with light theme toggle
- Newsletter signup in hero section
- Events section with Lu.ma calendar integration
- Blog section for fintech news and insights
- Mobile-first responsive design
- Headless CMS with PayloadCMS

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **UI Components**: Shadcn UI, ui-layouts.com components
- **CMS**: PayloadCMS (headless)
- **Deployment**: GitHub, AWS Amplify

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fintechtoronto/marketing-public-2.git
cd marketing-public-2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/src/app`: Next.js app router pages
- `/src/components`: React components
  - `/ui`: Shadcn UI components
  - `/layout`: Layout components (header, footer)
  - `/theme`: Theme-related components
- `/src/payload`: PayloadCMS configuration
  - `/collections`: Content models (Blog, Events, Media)

## Deployment

### GitHub

The project is configured to be deployed to GitHub at https://github.com/fintechtoronto/marketing-public-2.

### Netlify

For Netlify deployment, follow these steps:

1. Connect your GitHub repository to Netlify
2. Netlify will use the settings in netlify.toml for configuration
3. Configure any environment variables needed in the Netlify dashboard
4. Deploy the application

The deployment will be automatic whenever you push changes to your GitHub repository.

### Vercel (Alternative)

For Vercel deployment, follow these steps:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Next.js project and use the settings in vercel.json
3. Configure any environment variables needed in the Vercel dashboard
4. Deploy the application

## License

This project is proprietary and owned by FintechToronto.
