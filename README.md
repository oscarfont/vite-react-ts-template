# Vite + React + TypeScript Template

A modern, fast development template with batteries included! 🚀

Powered by **SWC** for lightning-fast builds and testing ⚡

## Tech Stack

- ⚛️ React 19
- 📜 TypeScript
- ⚡ Vite with SWC
- 🧪 Jest with SWC for Testing
- 📦 pnpm for Package Management
- 🟢 Node.js 20 (LTS Iron)

## Features

- Hot Module Replacement (HMR)
- TypeScript strict mode enabled
- ESLint configuration ready
- **Ultra-fast builds and tests with SWC compilation**
- Unit testing setup with Jest and jsdom
- Comprehensive TypeScript configuration
- Fast builds with pnpm

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run tests in watch mode
- `pnpm preview` - Preview production build
- `pnpm lint:check` - Check for linting issues
- `pnpm lint:fix` - Fix linting issues

## ESLint Configuration

The template includes a robust ESLint setup. For production applications, you can enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // Or for stricter rules:
    // ...tseslint.configs.strictTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## Additional Tools

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) - Uses SWC for Fast Refresh and compilation
- [@swc/jest](https://github.com/swc-project/pkgs/tree/main/packages/jest) - Ultra-fast test execution with SWC transpilation

## Use the template
```
mkdir your-new-shining-project && cd your-new-shining-project

pnpm dlx degit https://github.com/oscarfont/vite-react-ts-template.git
```