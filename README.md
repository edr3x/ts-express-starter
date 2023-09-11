# TS express starter

Express.js server starter with TypeScript

## Initialize the Project

```sh
yarn
```

## Run the server in development mode

```sh
yarn dev
```

This Runs the app in the development mode.\
Open <http://localhost:8080> to view it in your browser.\
If it shows `Hello There!` then the server is running successfully.

## To Build the project

```sh
yarn build
```

Generates the JS output in `dist` folder.

## Start the server

```sh
yarn start
```

Runs the js code from `dist` folder.

## Format the Code in `src/` directory

```sh
yarn format
```

## To run Tests
```sh
yarn test
```

>Note:\
> You can use any package manager of your choice

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
> Note:\
> If you are not using `yarn` as package manager then change to respective package manager in `Dockerfile`
