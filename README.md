# vadmin-plus

**中文** | [English](./README.en-US.md)

## 介绍

[vadmin-plus](https://github.com/joyheros/vadmin-plus) 是一个免费的开源管理前端模板，使用pnpm、vue3、vite5、Element-Plus、Vue-Router、Pinia、Axios等前端主流技术栈构建。为了降低学习的难度，本项目尽量减少引入第三方组件，对Element Plus等的组件也没有再进行封装，从而保证上手成本低、扩展性高，希望通过本项目能够让大家在学习Vue3等技术栈时少花些时间，少走些弯路。

## 项目特点

- **最新技术栈**：使用Vue3、Vite5等前端前沿技术开发

- **简单易用**：支持基于本地Mock数据运行，最小封装，易于尝试。

- **权限管理**：支持对用户、角色、菜单、部门的权限控制。

- **基础设施**：支持动态路由，按钮权限，i18n国际化，代码格式化和通用组件封装。

## 推荐的IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (禁止Vetur).

## 自定义配置

请参照 [Vite配置参考](https://vitejs.dev/config/).

## 项目安装

```sh
pnpm install
```

### 编译和热重载开发

```sh
pnpm dev
```

### 代码格式化 [Prettier](https://prettier.io/)

```sh
pnpm format
```

### 编译和最小化产品包

```sh
pnpm build
```

### 运行Unit Test [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### 代码规范检查 [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## 项目地址

- [vadmin-plus](https://github.com/joyheros/vadmin-plus)

## 项目目录结构

```base
.
├── mock                          #HTTP api模拟实现
├── public                        #公共静态文件目录
├── src                           #项目代码目录
│   ├── App.vue                   #主vue模块
│   ├── api                       #HPPT api调用模块
│   ├── assets                    #项目静态文件目录
│   ├── components                #公共组件
│   ├── config                    #项目配置
│   ├── directive                 #自定义指令
│   ├── enums                     #枚举
│   ├── layout                    #布局目录
│   ├── locale                    #国际化配置
│   ├── main.js                   #入口文件
│   ├── router                    #路由
│   ├── stores                    #状态管理模块
│   ├── styles                    #公共样式
│   ├── utils                     #公共方法
│   └── views                     #存放vue页面目录
├── LICENSE
├── README.en-US.md
├── README.md
├── .env                          #环境变量
├── .env.development              #开发环境变量
├── .env.production               #生产环境变量
├── .eslintrc.cjs                 #esLint配置文件
├── .gitignore                    #git忽略配置文件
├── prettierrc.json               #prettier配置文件
├── index.html                    #根模板
├── jsconfig.json
├── package.json
├── pnpm-lock.yaml
├── uno.config.js                 #unocss配置文件
├── vite.config.js                #vite配置文件
└── vitest.config.js              #vitest配置文件
```

## 如何贡献

**Pull Request:**

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feature/xxxx`
3. 提交你的修改: `git commit -m 'feature: add xxxxx'`
4. 推送您的分支: `git push origin feature/xxxx`
5. 提交: `pull request`

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范

  - `feat` : 新增功能
  - `fix` : 修复缺陷
  - `docs` : 文档变更
  - `style` : 代码格式
  - `refactor` : 代码重构
  - `perf` : 性能优化
  - `test` : 添加疏漏测试或已有测试改动
  - `build` : 构建流程、外部依赖变更 (如升级 npm 包、修改打包配置等)
  - `ci` : 修改 CI 配置、脚本
  - `revert` : 回滚 commit
  - `chore` : 对构建过程或辅助工具和库的更改 (不影响源文件)
  - `wip` : 正在开发中
  - `types` : 类型定义文件修改

## 感谢以下项目提供帮助

- [vue3-element-admin](https://github.com/youlaitech/vue3-element-admin)
- [vue-pure-admin](https://github.com/xiaoxian521/vue-pure-admin)
- [vue-xs-admin](https://github.com/jsxiaosi/vue-xs-admin)

## 维护者

[@joyheors](https://github.com/joyheros) 
[@wqjin-frank](https://github.com/wqjin-frank)

## 许可证

完全免费开源

[MIT © 2024-present, vadmin-plus](./LICENSE)

## `Star`

非常感谢留下星星的好心人，感谢您的支持 :heart:
