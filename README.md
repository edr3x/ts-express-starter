# TS express starter

Express.js server starter with TypeScript

## File Structure
```
project root
|
|__ src/
|   |
|   |__ config/
|   |   |__ env.ts
|   |
|   |__ controllers/
|   |   |__ healthcheck.controller.ts
|   |
|   |__ middlewares/
|   |   |__ notFound.middleware.ts
|   |
|   |__ routes/
|   |   |__ healthcheck.route.ts
|   |   |__ index.ts
|   |
|   |__ services/
|   |   |__ healthcheck.service.ts
|   |
|   |__ utils/
|   |   |__ logger.ts
|   |   |__ response.ts
|   |
|   |__ main.ts
|
|__ .gitignore
|__ .prettierrc.yaml
|__ app.log
|__ package.json
|__ pnpm-lock.yaml
|__ README.md
|__ tsconfig.json
```

## Initialize the Project

```bash
npm i
# or
yarn
# or
pnpm i
```

## Run the server in development mode

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

This Runs the app in the development mode.\
Open <http://localhost:8080> to view it in your browser.\
If it shows `{"status":404,"error":"404 endpoint not found"}` then the server is running successfully.

You can also go to <http://localhost:8080/api/v1/healthcheck> for healthcheck route

## To Build the project

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Generates the JS output in `dist` folder.

## Start the server

```bash
npm run start
# or
yarn start
# or
pnpm start
```

Runs the js code from `dist` folder.

## Format the Code in `src/` directory

```bash
npm run format
# or
yarn format
# or
pnpm format
```

This uses prettier to format the code according to config defined in `.prettierrc.yaml` file
