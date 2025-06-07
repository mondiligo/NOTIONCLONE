# Notion Clone

This project is a simplified Notion-like editor built with React and TypeScript.
It includes a block editor, a command palette accessible via a button, and
dynamic tables backed by a small data engine with sample datasets.

Selecting **Data Table** from the command palette opens a dataset picker. Use
the search box to filter datasets and choose one to render as a dynamic table.

Two sample datasets are included: "Ventas de Productos 2024" and
"Inventario 2024". You can extend `data-engine.ts` with your own data.

The command palette offers ten block types, including quote and divider
blocks.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```
