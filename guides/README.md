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


### Cleaning up the `/dist` folder

使用 [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin) 清理 `/dist` 文件夹，需要注意的是，clean-webpack-plugin 从 2.0 版本开始自动识别 webpack 的输出配置，无需再指定清理位置。

### The Manifest

插件可以通过获取 webpack 输出的 manifest 来获取生成的文件清单。

可以使用 [WebpackManifestPlugin](https://github.com/danethurber/webpack-manifest-plugin) 来获取 json 格式的 manifest。

## Development

[mode](https://webpack.js.org/concepts/mode/)：webpack 4 新增，用来执行 webpack 内置的优化命令。合法值为 `none`、`development` 和 `production`，若不设置，执行 webpack 命令会有如下警告，并且会按照 `production` 执行：
> WARNING in configuration
>
> The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
> 
>You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/

### Using source maps

为什么要使用 source maps，因为 webpack 打成一个包之后，若其中一个 js 文件报错，错误只能定位到这个打好的包上，而无法精确定位是哪一个没打包之前的 js 报错。使用 [source maps](https://blog.teamtreehouse.com/introduction-source-maps) 可以精确定位错误来源。

[devtool](https://webpack.js.org/configuration/devtool/) 配置可以配置使用 source maps 生成的不同形式。

未使用 source maps：
> Uncaught ReferenceError: cosnole is not defined
>    at HTMLButtonElement.printMe (VM24 print.js:4)

使用了 source maps：
> Uncaught ReferenceError: cosnole is not defined
>    at HTMLButtonElement.printMe (print.js:2)

发现 Chrome 在未使用 source maps 的情况下，也能找到对应文件。

### Choosing a Development Tool

需要自动编译，而不是每次修改都要执行 `npm run build` 命令。主要有以下三种方式实现自动编译：
- webpack's Watch Mode
- webpack-dev-server
- webpack-dev-middleware

#### Using Watch Mode

使用 `webpack --watch` 命令进入 watch mode，可以实现自动编译，唯一的问题是，每次都需要手动刷新浏览器。