# Services

This directory contains all service modules for API calls, utilities, and business logic.

## Structure
- Each service should be in its own file or subdirectory
- Service tests should be placed in the `__tests__` directory
- Use the `index.ts` file to export services for easy importing

## Example
```
services/
├── ApiService.ts
├── AuthService.ts
├── DataService.ts
├── __tests__/
│   ├── ApiService.test.ts
│   ├── AuthService.test.ts
│   └── DataService.test.ts
└── index.ts
```
