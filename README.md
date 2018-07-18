[![yopta-loader v0.1](https://img.shields.io/badge/download-v0.1-brightgreen.svg?style=flat)](https://github.com/KristobalJunta/yopta-loader/releases)
[![yopta-loader npm v0.1](https://img.shields.io/badge/npm-v0.1-blue.svg?style=flat)](https://www.npmjs.com/package/yopta-loader)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/KristobalJunta/yopta-loader/issues)
[![contributions welcome](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat)](https://github.com/KristobalJunta/yopta-loader/blob/master/LICENSE)

# yopta-loader
A webpack loader for YoptaScript

---

Лоадер для Webpack для транспиляции замечательного [YoptaScript](https://github.com/samgozman/YoptaScript) в обычный скучный JavaScript.

## Установка и использование

```
npm install yopta-loader
```

Для транспиляции YoptaScript-файлов нужно прописать в `webpack.config.js` следующее:

```js
module: {
  loaders:[
    {
      test: /\.ys\.js$/, // или как вы там подписываете свои скрипты, епта
      loader: 'yopta-loader',
      exclude: /(node_modules)/
    }
  ]
}
```
