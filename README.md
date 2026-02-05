# Proyecto Node.js + Express para Render

## Requisitos
- Node.js 18+ (recomendado 20 LTS)

## Instalacion
```bash
npm install
```

## Ejecutar en local
```bash
npm run dev
```

Tambien puedes usar:
```bash
npm start
```

El servidor levanta en:
```
http://localhost:9000
```

## Endpoints
- GET /health -> { ok: true }
- GET /api/products
- GET /api/products/:id
- POST /api/products
- DELETE /api/products/:id

## Correr tests
```bash
npm test
```

Modo watch:
```bash
npm run test:watch
```

CI (modo no interactivo):
```bash
npm run test:ci
```
