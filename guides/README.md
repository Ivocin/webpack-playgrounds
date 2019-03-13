# webpack-guides

从官网 [Guides](https://webpack.js.org/guides) 开始学习 webpack 使用。

## Getting Started

### Creating a Bundle

从这个例子可以看出，webpack 4 的 0 配置功能，默认入口为 `src/index.js`，默认入口名为  `main`，默认输出位置为 `dist` 文件夹，默认输出文件为 `main.js`。

而且 webpack 支持 [ES2015](https://babeljs.io/docs/en/learn/) 的 `import` 和 `export` 语法，实际上是进行了 transpile。

### Using a Configuration

`webpack` 命令会默认读取 `webpack.config.js` 文件，如果需要加载其他文件名，使用 `--config` 选项。