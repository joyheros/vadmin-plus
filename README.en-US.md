# vadmin-plus

**English** | [中文](./README.md)

## Introduction

[vadmin-plus](https://github.com/joyheros/vadmin-plus) is a free open source management front-end template, built with pnpm, vue3, vite5, Element-Plus, Vue-Router, Pinia, Axios and other front-end mainstream technology stack. In order to reduce the difficulty of learning, this project reduces to introducte third-party components as much as possible, and does not package components such as Element Plus, so as to ensure low cost and high scalability. It is hoped that through this project, everyone can spend less time and take fewer detcorners when learning technology stacks such as Vue3.

## Preview address
- [github site](https://joyheros.github.io/vadmin-plus/)

## Project Features

- **The latest technology stack**: developed using front-end cutting-edge technologies such as Vue3, Vite5 etc.

- **Simple and Easy-to-use**: Support local `Mock` data, minimal encapsulation and easy to try.

- **Permission Management**: Support permission controll for user, role, menu and department.

- **Infrastructure**: Support dynamic routing, button permissions, i18n, code format and common component encapsulation.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Code format with [Prettier](https://prettier.io/)

```sh
pnpm format
```

### Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Project address

- [vadmin-plus](https://github.com/joyheros/vadmin-plus)

## Project directory Structure

```base
.
├── mock                          #HTTP api mock implements
├── public                        #Public static file directory
├── src                           #Project Code Directory
│   ├── App.vue                   #The vue module
│   ├── api                       #HPPT api call module
│   ├── assets                    #Project static file directory
│   ├── components                #Common components
│   ├── config                    #Project configuration
│   ├── directive                 #Custom directive
│   ├── enums                     #enum
│   ├── layout                    #Layout of the directory
│   ├── locale                    #Internationalization Configuration
│   ├── main.js                   #Entrance file
│   ├── router                    #Route
│   ├── stores                    #Pinia
│   ├── styles                    #Common style
│   ├── utils                     #Common methods
│   └── views                     #Directory for storing vue pages
├── LICENSE
├── README.en-US.md
├── README.md
├── .env                          #Environment variables
├── .env.development              #Development environment variables
├── .env.production               #Production environment variables
├── .eslintrc.cjs                 #esLint configuration files
├── .gitignore                    #git ignore configuration files
├── prettierrc.json               #prettier configuration files
├── index.html                    #The root template
├── jsconfig.json
├── package.json
├── pnpm-lock.yaml
├── uno.config.js                 #unocss configuration files
├── vite.config.js                #vite configuration files
└── vitest.config.js              #vitest configuration files
```

## How to contribute

**Pull Request:**

1. Fork Code!
2. Create your own branch: `git checkout -b feature/xxxx`
3. Submit your changes: `git commit -m 'feature: add xxxxx'`
4. Push your branch: `git push origin feature/xxxx`
5. Submit: `pull request`

## Git Contribution submission specification

- Refer to [Vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) specification

  - `feat` : New Features
  - `fix` : Repair defects
  - `docs` : Document change
  - `style` : Code format
  - `refactor` : Code refactoring
  - `perf` : Performance optimization
  - `test` : Add neglected tests or changes to existing tests
  - `build` : Build processes, external dependency changes (such as upgrading npm packages, modifying packaging configurations, etc.)
  - `ci` : Modify CI configuration and scripts
  - `revert` : Roll back the commit
  - `chore` : Changes to the build process or tools and libraries (do not affect source files)
  - `wip` : Under development
  - `types` : Type definition file modification

## Thanks to the following projects for help

- [vue3-element-admin](https://github.com/youlaitech/vue3-element-admin)
- [vue-pure-admin](https://github.com/xiaoxian521/vue-pure-admin)
- [vue-xs-admin](https://github.com/jsxiaosi/vue-xs-admin)

## maintainers

[@joyheors](https://github.com/joyheros)  
[@wqjin-frank](https://github.com/wqjin-frank)

## `Star`

Many thanks to the kind individuals who leave a star. Your support is much appreciated :heart:
