# CONNECTIONS_BACKEND

Minimal, production-ready Node.js backend for the CONNECTIONS application.

## Features
- REST API (Express)
- JWT authentication
- Environment-based configuration
- Mongoose (MongoDB) data layer (replaceable)
- ESLint + Prettier, tests (Jest)

## Requirements
- Node.js 16+ (or LTS)
- npm / yarn
- MongoDB (or another DB configured via DATABASE_URL)

## Quickstart

1. Clone repository
    ```
    git clone <repo-url> && cd CONNECTIONS_BACKEND
    ```
2. Install dependencies
    ```
    npm install
    ```
3. Add environment variables (see `.env.example`)
4. Run in development
    ```
    npm run dev
    ```
5. Build & run
    ```
    npm run build
    npm start
    ```

## .env (example)
```
NODE_ENV=development
PORT=4000
DATABASE_URL=mongodb://localhost:27017/connections
JWT_SECRET=replace_with_a_strong_secret
LOG_LEVEL=info
```

## NPM scripts
- `npm run dev` — start dev server with nodemon
- `npm start` — start compiled server (production)
- `npm run build` — transpile (if using TypeScript/Babel)
- `npm test` — run tests
- `npm run lint` — run linter
- `npm run format` — format code

## Project structure (suggested)
```
/src
  /controllers
  /models
  /routes
  /services
  /middleware
  app.js
  server.js
/config
/tests
.env.example
package.json
README.md
```

## API (examples)
- POST /api/auth/register — register user (body: email, password, name)
- POST /api/auth/login — obtain JWT (body: email, password)
- GET /api/users/me — get current user (Auth)
- GET /api/connections — list connections (Auth)
- POST /api/connections — create connection (Auth)

Return codes follow REST conventions: 200/201, 400, 401, 403, 404, 500.

## Environment & Security
- Keep secrets out of source control
- Use TLS in production
- Rotate JWT secret and DB credentials periodically
- Validate and sanitize inputs

## Tests
- Unit and integration tests using Jest
- Mock DB or use test instance
```
npm test
```

## Contributing
- Fork → feature branch → PR
- Follow existing code style and tests
- Run `npm run lint` and `npm test` before PR

## License
Specify a license in LICENSE file (e.g., MIT).

For implementation details or scaffolding (Express + Mongoose + auth), request specific templates or code snippets.