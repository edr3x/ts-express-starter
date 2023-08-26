# TS express starter

Express.js server starter with TypeScript

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

## To Throw a error from anywhere on the codebase
```ts
   throw new CustomError(500, "Unexpected Server ERROR");
```
- here first argument to send is statuscode and second argument is any form of string or any

## Dockerize

### Build the image

```sh
docker build -t <image-name> .
```

### Run built image

```sh
docker run -e CLIENT_BASE_URL=localhost:8080 -p 8080:8080 -it <image-name>
```
> Note:
> 
> If you are not using `yarn` as package manager then change to respective package manager in `Dockerfile`
