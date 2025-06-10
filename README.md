# Typebot Visualizer

A Next.js application that visualizes Typebot flows using React Flow. This tool provides an interactive way to view and explore Typebot conversation flows with a modern, dark-themed interface.

## Features

- **Interactive Flow Visualization**: View Typebot flows as interactive node-based diagrams
- **Dark Theme**: Modern dark interface optimized for flow visualization
- **Flow Statistics**: Built-in statistics panel showing flow metrics
- **Responsive Design**: Works on desktop and mobile devices
- **Zoom & Pan Controls**: Navigate through complex flows easily
- **Mini Map**: Overview of the entire flow structure

## Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **UI Library**: React 19
- **Flow Visualization**: @xyflow/react (React Flow)
- **Styling**: Tailwind CSS with dark theme support
- **Type Safety**: TypeScript
- **Package Manager**: npm/pnpm

## Prerequisites

- Node.js 18+
- npm or pnpm

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd typebot-visualizer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
typebot-visualizer/
├── app/ # Next.js App Router pages
│ ├── page.tsx # Main page component
│ ├── layout.tsx # Root layout
│ └── globals.css # Global styles
├── components/ # React components
│ ├── flow-visualizer.tsx # Main flow visualization component
│ ├── flow-stats.tsx # Statistics panel
│ ├── theme-provider.tsx # Theme context provider
│ └── nodes/ # Custom node components
├── lib/ # Utility functions
│ ├── sample-data.ts # Sample Typebot data
│ └── flow-converter.ts # Typebot to React Flow converter
├── types/ # TypeScript type definitions
├── hooks/ # Custom React hooks
└── public/ # Static asset
```

## Customization

### Adding Your Own Typebot Data

1. Replace the sample data in `sample-data.ts`
2. Update the TypebotData interface in `typebot.ts` if needed
3. The flow converter will automatically transform your data into the visualization format

### Flow Converter

The flow converter (`flow-converter.ts`) transforms Typebot data into React Flow format. Modify this file to change how Typebot elements are rendered.
