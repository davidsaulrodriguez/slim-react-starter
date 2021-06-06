# Slim React Starter

### Tabel of Contents

- [Description](#description)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Development](#development)
- [Supported Versions](#supported-versions)
- [Bugs and Issues](#bugs-and-issues)
- [License](#license)

## Description

**Slim React Starter** is a custom built React project template that is built from scratch. It provides a decent starting point for a React based project without the overhead of the `create-react-app` npm package.

This slimmed down version results in faster installations of the required dependecies and even faster build times!

**Download**

[Download the zip][archive] or clone this project.

```shell
git clone https://github.com/davidsaulrodriguez/slim-react-starter.git My-React-App
```

## Dependencies

### Project Dependencies

- "react": "^17.0.2",
- "react-dom": "^17.0.2",
- "react-router-dom": "^5.2.0"

### Development Dependencies

- "@babel/core": "^7.14.3",
- "@babel/eslint-parser": - "^7.14.4",
- "@babel/- plugin-proposal-class-pro- perties": "^7.13.0",
- "@babel/preset-env": "^7.- 14.4",
- "@babel/preset-react": - "^7.13.13",
- "eslint": "^7.27.0",
- "eslint-config-prettier":- "^8.3.0",
- "eslint-plugin-import": - "^2.23.4",
- "eslint-plugin-jsx-a11y":- "^6.4.1",
- "eslint-plugin-react": - "^7.24.0",
- "eslint-plugin-react-hook- s": "^4.2.0",
- "parcel": "^2.0.0-beta.2",
- "prettier": "^2.3.0"

## Usage

To get started with this project base, all you need to do is:

1.  clone the repo
2.  install the dependencies

### Example

```bash
git clone git@github.com:davidsaulrodriguez/slim-react-starter.git My-React-App
cd My-React-App/
npm i
```

## Development

### Starting the live development server (Parcel)

While working and developing on the source code, you can run a live development server with:

```shell
npm run dev
```

This command compiles your code and then outputs to a `dist/` folder which is used to serve the live development server.

### Formatting (Prettier)

It is suggested that you format your code with **Prettier** in order to make sure you code is clean and consistent before you commit and publish it to GitHub. To do this, you can simply run:

```shell
npm run format
```

### Linting (ESLint)

Linting is important! You can statically analyzes your code to quickly find problems with **ESLint** by running:

**Lint check backend code**

```shell
npm run lint
```

### Build the production code (Parcel)

When all is said and done and you are ready to compile a production ready build of your code, you can run:

```shell
npm run build
```

This will output to a `build/` folder which will contain all of your production ready source code that can then be served on your web server.

## Supported Versions

Below is a list of the currently supported versions of this software.

| Release |       Status       | Initial Release | Active LTS Start | Maintenance LTS Start | End of Life |
| :-----: | :----------------: | :-------------: | :--------------: | :-------------------: | :---------: |
| develop |      Unstable      |        -        |        -         |           -           |      -      |
|   v1    | :heavy_check_mark: |   2021-06-06    |    2021-12-01    |           -           | 2022-06-30  |
|   v2    |   :construction:   |       TBD       |       TBD        |          TBD          |     TBD     |

You can view the Status Key Map and software support model [here][support].

## Bugs and Issues

Found a bug? Having an issue with this app? [Open a new issue][issues] here.

## License

This project and all of its source code is released and permissively licensed under the [BSD 2 Clause][license] license.

[archive]: https://github.com/davidsaulrodriguez/slim-react-starter/archive/main.zip
[support]: ./SLC.md
[contrib]: ./CONTRIBUTING.md
[branching]: ./docs/Branching_Model.md
[issues]: https://github.com/davidsaulrodriguez/lim-react-starter/issues/new/choose
[license]: ./LICENSE
