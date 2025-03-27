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

### AWS Amplify

For AWS Amplify deployment, follow these steps:

1. Connect your GitHub repository to AWS Amplify
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Add environment variables as needed
4. Deploy the application

## License

This project is proprietary and owned by FintechToronto.
