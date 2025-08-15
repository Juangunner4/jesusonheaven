# Pages

This directory contains all page-level components and route components.

## Structure
- Each page should have its own subdirectory
- Page tests should be placed in the `__tests__` directory
- Use the `index.ts` file to export pages for easy importing

## Example
```
pages/
├── HomePage/
│   ├── HomePage.tsx
│   └── HomePage.css
├── AboutPage/
│   ├── AboutPage.tsx
│   └── AboutPage.css
├── __tests__/
│   ├── HomePage.test.tsx
│   └── AboutPage.test.tsx
└── index.ts
```
