# SEHUB Frontend

A modern frontend application built with Next.js, TypeScript, TailwindCSS, and Shadcn/ui.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Shadcn/ui components
│   └── layout/           # Layout components
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
└── styles/               # Global styles
    └── globals.css       # TailwindCSS imports and custom styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd sehub-fe-builderio
```

2. Install dependencies
```bash
npm install
```

3. Copy environment variables
```bash
cp env.example .env.local
```

4. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 UI Components

This project uses Shadcn/ui components. To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

## 🔧 Configuration

### TypeScript
- Configuration: `tsconfig.json`
- Strict mode enabled
- Path aliases configured for clean imports

### TailwindCSS
- Configuration: `tailwind.config.ts`
- Custom color scheme with CSS variables
- Dark mode support
- Custom animations

### Shadcn/ui
- Configuration: `components.json`
- Default style with CSS variables
- TypeScript support enabled

## 📝 Code Style

- ESLint configuration for code quality
- TypeScript strict mode
- Consistent file naming (kebab-case for files, PascalCase for components)
- Clean imports with path aliases

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## 📄 License

This project is licensed under the MIT License.
