
# React ts redux template


This is a React Typescript template to fork for your new projects.
It utilizes the newest features of react also redux-toolkit
Has a preset tsconfig and eslint strict rules for best practices
It uses a custom webpack and babel config.

## Versions

- `node 14.17.0`
- `yarn 1.22.18`
- `react 18.2.0`

## Windows nvm
Download: [nvm setup](https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.zip)

## Linux nvm

Run:
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```


To use it run a terminal with admin rights:
```js static
nvm install 14.17.0
```
```js static
nvm use 14.17.0
```

## Set up the project
The project uses yarn

```js static
npm install yarn --global
```

## On the root of the project run
```js static
yarn install
```

## To start the project run
```js static
yarn start
```
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Must have VS code extensions

- `ESLint` used to ensure code quality
- `Prettier Code formatter` used to format code (use this as a default formatter)

## Available Scripts

In the project directory, you can run:
```js static
yarn build
```
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

```js static
yarn run clear-install
```
Resets the project state by deleting yarn.lock and node_modules and installing
them again.


```js static
npm install -g windows-build-tools
```
Fixes python issue

```js static
yarn run check-cycle
```

Checks the project for any circular dependecies
