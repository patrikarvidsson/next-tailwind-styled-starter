# Next.js + Twin Macro + Styled Components Boilerplate

A basic, production-ready boilerplate for Next.js applications using Twin Macro (Tailwind CSS-in-JS), Styled Components, and TypeScript.

## Features

- ⚡️ Next.js 15
- 💅 Styled Components
- 🎨 Twin Macro (Tailwind CSS-in-JS)
- 📝 TypeScript
- 🔧 ESLint
- 💖 Prettier

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nextjs-twin-macro-boilerplate.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/           # Next.js app directory (App Router)
│   ├── layout.tsx # Root layout
│   └── page.tsx   # Home page
├── components/    # React components
├── public/        # Static files
├── styles/        # Global styles
└── types/         # TypeScript type definitions
```

### App Router Structure

This boilerplate uses Next.js 15 with the App Router, which provides:

- Server Components by default
- Simplified data fetching
- Built-in SEO optimizations
- Layout nesting
- Route groups
- Loading and error states

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint for code linting

## Twin Macro Usage

This boilerplate uses Twin Macro with Styled Components. Here's a basic example:

```jsx
import tw, { styled } from "twin.macro";

// Using tw
const StyledDiv = tw.div`flex items-center justify-center min-h-screen`;

// Using styled-components with tw
const Button = styled.button`
  ${tw`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600`}
`;
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Twin Macro](https://github.com/ben-rogerson/twin.macro)
- [Styled Components](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com/)
