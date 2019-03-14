# webpack-guides

从官网 [Guides](https://webpack.js.org/guides) 开始学习 webpack 使用。

## Getting Started

### Creating a Bundle

从这个例子可以看出，webpack 4 的 0 配置功能，默认入口为 `src/index.js`，默认入口名为  `main`，默认输出位置为 `dist` 文件夹，默认输出文件为 `main.js`。

而且 webpack 支持 [ES2015](https://babeljs.io/docs/en/learn/) 的 `import` 和 `export` 语法，实际上是进行了 transpile。

### Using a Configuration

`webpack` 命令会默认读取 `webpack.config.js` 文件，如果需要加载其他文件名，使用 `--config` 选项。

### NPM Scripts

使用 [npm scripts](https://docs.npmjs.com/misc/scripts) 可以不用在命令行输入 `npx webpack` 命令


## Asset Management

### Setup

### Loading CSS

安装：
- [style-loader](https://webpack.js.org/loaders/style-loader/): Adds CSS to the DOM by injecting a `<style>` tag
- [css-loader](https://webpack.js.org/loaders/css-loader/):The `css-loader` interprets `@import` and `url()` like `import/require()` and will resolve them.

生产环境还需要考虑压缩问题：[minimize css](https://webpack.js.org/guides/asset-management/)

### Loading Images

安装 [file-loader](https://webpack.js.org/loaders/file-loader/)

### Loading Fonts

注意 `ttf` 文件的 `format` 为 `truetype`
奇怪的一点是，在 Chrome Dev Tools 的 Source 中没有 ttf 文件，Network 里面有。

### Loading Data

默认支持 JSON 类型文件，CSV 、TSV 、XML 需要安装对应 loader：

- [csv-loader](https://github.com/theplatapi/csv-loader) 
- [xml-loader](https://github.com/gisikw/xml-loader)

## Output Management

### Preparation

多入口，输出文件名使用 `[name]` 指定，`[name]` 即为 entry point 的名称。

### Setting up HtmlWebpackPlugin

使用 [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) 自动生成 html 文件，默认输出 `dist/index.html`。

这块的例子不太好，因为 `index.js` 文件已经 `import` 了 `print.js` 文件，所以 `app.bundle.js` 文件里已经包含了 `print.js` 的内容，`print.bundle.js` 就多余了。



