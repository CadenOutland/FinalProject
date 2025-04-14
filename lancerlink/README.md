# LancerLink – Freelance Management API

This is the back-end for LancerLink, a freelance management app that handles clients, projects, invoices, and notes.

## Setup

```bash
git clone https://github.com/YOUR_USERNAME/LancerLink.git
cd LancerLink
npm install
node db.js      # Optional: if db is not created on server startup
npm start
```

## Endpoints

- GET /clients
- POST /clients
- PUT /clients/:id
- DELETE /clients/:id

## Example curl Commands

```bash
curl -X POST http://localhost:3000/clients -H "Content-Type: application/json" -d '{"name": "Acme", "email": "acme@test.com", "phone": "555-0000"}'
curl http://localhost:3000/clients
```

## Run Tests

```bash
npm test
```