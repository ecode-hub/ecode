### 1、创建 package.json

```
yarn init -y
```

### 2、git 初始化

```
git init
```

### 3、添加 .gitignore 文件

```
node_modules
dist
```

### 4、安装 webpack 相关依赖

```
yarn add webpack webpack-cli webpack-dev-server -D
yarn add html-webpack-plugin -D
```

### 5、安装 typescript 相关依赖

```
yarn add typescript ts-loader -D
```

### 6、安装 react 相关依赖

```
yarn add react react-dom
yarn add @types/react @types/react-dom -D
```

### 7、编写 tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "baseUrl": "./",
    "paths": {
      "@container/*": ["src/container/*"]
    }
  }
}
```

`tsconfig.json` 一些属性作用：

1、`allowSyntheticDefaultImports:true`:

```js
// 这样不会报错
import React, { Component } from "react";
// 要不然只能
import * as React from "react";
```

2、`moduleResolution:"node"`:

```js
//可以直接引用文件夹
import Head from "@components/head";
// 而不需要
import Head from "@components/head/index";
```

### 8、添加入口文件

添加 `src/index.tsx`,

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "@container/App/index";

ReactDOM.render(<App />, document.getElementById("root"));
```

添加 `src/container/App/index.tsx`

```js
import React, { Component } from "react";

class App extends Component {
  render() {
    return <div>Hello React!</div>;
  }
}

export default App;
```

### 9、添加模版 html

添加 `index.html`,

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Webpack App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 10、编写 webpack.config.js 文件

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@container": path.resolve(__dirname, "src/container/")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
```

### 11、添加 package.json script 脚本

```json
{
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "start": "webpack-dev-server --config webpack.config.js"
  }
}
```

### 12、添加 scss

安装相关依赖：

```
yarn add css-loader node-sass sass-loader style-loader -D
```

在 `webpack.config.js` 中的 `module.rule` 里添加如下配置：

```js
{
  test: /\.scss$/,
  use: [
    {
      loader: "style-loader" // 将 JS 字符串生成为 style 节点
    },
    {
      loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
    },
    {
      loader: "sass-loader" // 将 Sass 编译成 CSS
    }
  ]
}
```

然后就可以在 `src/container/App/index.tsx` 中添加 `.scss文件`

---

后续可选

### 13、添加 tslint (官方不推荐使用 tslint)

> 在 `feat/support-tslint` 分支中可以看到如下修改

#### 安装相关依赖

```bash
yarn add tslint -D

# 全局安装
yarn global add tslint
```

#### 生成配置文件 tslint.json

```
tslint --init
```

如下：

```json
{
  "defaultSeverity": "error",
  "extends": ["tslint:recommended"],
  "jsRules": {},
  "rules": {},
  "rulesDirectory": []
}
```

#### 安装 vscode 插件 TSLint

#### package.json 中添加脚本

```json
{
  "lint": "tslint -p tsconfig.json 'src/**/*.{ts,tsx}'",
  "lint:fix": "tslint -p tsconfig.json 'src/**/*.{ts,tsx}' --fix"
}
```

### 14、Typescript 添加 eslint

> 在 `feat/support-eslint` 分支中可以看到如下修改

#### 安装相关依赖

```
yarn add eslint -D
```

由于 ESLint 默认使用 `Espree` 进行语法解析，无法识别 TypeScript 的一些语法，故我们需要安装 `@typescript-eslint/parser`，替代掉默认的解析器：

```
yarn add @typescript-eslint/parser -D
```

接下来需要安装对应的插件 `@typescript-eslint/eslint-plugin` 它作为 eslint 默认规则的补充，提供了一些额外的适用于 ts 语法的规则。

```
yarn add @typescript-eslint/eslint-plugin -D
```

#### 添加配置文件

ESLint 需要一个配置文件来决定对哪些规则进行检查，添加 .eslintrc

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "no-var": "error",
    "semi": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"]
  }
}
```

#### 代码中 ESLint 检查，并自动保存

##### 安装 vscode 插件 TSLint

在项目更目录下创建一个配置文件 `.vscode/settings.json`，添加以下配置：

```json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

> 在 vscode 1.41 版本以后，如果只需要代码检查，不需要添加`.vscode/settings.json`；

#### 其他

在 typescript 的 3.7 或以上版本中，支持了可选链写法

```js
const a = { num: 1 };
const b = a?.num;
console.log(b);
```

如果报错，尝试升级 vscode

#### 参考文档

[TypeScript 入门教程 代码检查](https://ts.xcatliu.com/engineering/lint)
[Using ESLint and Prettier in a TypeScript Project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)

### 15、提交前代码检查

#### 添加 lint

> 基于 `feat/support-eslint` 创建分支 `feat/support-husky`

安装 husky 依赖：

```bash
yarn add husky -D
```

在 package.json 中添加如下配置:

```json
"husky": {
  "hooks": {
    "pre-commit": "yarn eslint"
  }
}
```

#### 添加 lint-staged

安装 lint-staged 依赖：

```bash
yarn add lint-staged -D
```

在 package.json 中修改配置如下:

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{tsx,ts}": "eslint"
}
```

将该分支合到 master

### 16、添加热更新

> 如果是 .js 文件，webpack 能良好的支持热更新；但是如果是 .ts 文件，由于 ts-loader 官方不支持 HMR，所以要做额外的处理，参考这个[链接](https://stackoverflow.com/questions/59818608/when-i-import-ts-suffix-files-webpack-hmr-not-work/59818711)

#### 安装相关依赖

```
yarn add fork-ts-checker-webpack-plugin -D
```

#### webpack.config.js 修改

修改 `ts-loader` 配置：

```js
{
  test: /\.tsx?$/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }
  ],
  exclude: /node_modules/
}
```

修改 `devServer`:

```js
devServer: {
  port: 3000,
  hot: true
}
```

添加插件：

```js
new ForkTsCheckerWebpackPlugin();
```

#### package.json 修改

将 `module` 从 `es6` 改成 `esnext`

#### 安装必要的 typescript 申明文件

```
yarn add @types/eslint -D
yarn add @types/webpack -D
```

#### index.tsx 添加如下代码

```js
if (typeof (module as any).hot !== 'undefined') {
  (module as any).hot.accept('@container/App/index', () => {
    console.log('Accepting the updated module!');
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
```

#### 参考文档

[模块热替换 文档](https://webpack.docschina.org/guides/hot-module-replacement/)
https://webpack.js.org/guides/hot-module-replacement/

### css in js

### 添加 react 路由

### 添加 mobx

### 填加调试

### 添加单元测试

### SSR

### 添加 Dockerfile

### 添加 sentry 监控工具

### 添加 CI

### 部署到云服务器

---

### set remote url

```
remote set-url origin git@github.com:WangYuLue/ecode.git
```