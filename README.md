# eastcoach2

A modern web application built with TanStack Start, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** TanStack Start (SSR with TanStack Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Base UI)
- **State Management:** TanStack Query
- **Form Handling:** TanStack Form with Zod validation
- **Monorepo:** Turborepo
- **Package Manager:** Bun
- **Code Quality:** Ultracite (Biome-based)

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3001](http://localhost:3001) to view the application.

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start all applications in development mode |
| `bun run build` | Build all applications for production |
| `bun run dev:web` | Start only the web application |
| `bun run check-types` | Check TypeScript types across all apps |
| `bun x ultracite check` | Check code quality issues |
| `bun x ultracite fix` | Format and auto-fix code issues |

## Project Structure

```
eastcoach2/
├── apps/
│   └── web/              # Frontend application (TanStack Start)
│       ├── src/
│       │   ├── components/
│       │   │   └── ui/   # shadcn/ui components
│       │   ├── routes/   # TanStack Router file-based routes
│       │   └── lib/      # Utilities
│       └── public/
├── packages/
│   ├── config/           # Shared configuration
│   └── env/              # Shared environment variables
├── biome.json            # Ultracite linting rules
└── turbo.json            # Turborepo configuration
```

## Code Standards

This project follows **Ultracite** code standards. See `.claude/CLAUDE.md` for details.

Key conventions:
- Use explicit types for function parameters and return values
- Prefer `const` over `let`, never use `var`
- Use async/await instead of promise chains
- Function components over class components
- Remove `console.log` and `debugger` from production code

## License

Private project.
