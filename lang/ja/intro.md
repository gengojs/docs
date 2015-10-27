# Introduction

::: gengo
gengo.jsは非常に小さな[コア](https://github.com/gengojs/core)によって供給され、どんなノードサーバーにでも使えるi18n/l10nライブラリです。
コアと一緒に、それはまた、六つのプラグインによって管理されています。これらの組み合わせは、強力とユニークなライブラリーを引き継ぎ、ディベロッパーをその機能を拡張させてくれるライブラリーです。
コアは、本質的に、このようなプラグインのオプションやプラグイン自体にアクセスする方法として、基礎を提供するユニットです。
:::


# Usage

```bash
#npm install
sudo npm install gengojs --save
```

## Initialize

::: gengo
簡単にgengo.jsを初期化することができます。Optionsを参照してください。
:::

### Express

```javascript
var gengo = require('gengojs');
var app = require('express')();

app.use(gengo({
	'backend': { 'directory': __dirname + '/config/locales' },
	'header' : { 'default': 'en-us', supported: ['ja'] },
	'router': { 'enabled': true }
}));
```

### Koa

```javascript
var gengo = require('gengojs/koa');
var app = require('koa')();

app.use(gengo({
	'backend': { 'directory': __dirname + '/config/locales' },
	'header' : { 'default': 'en-us', supported: ['ja'] },
	'router': { 'enabled': true }
}));
```

### Hapi

```javascript
var gengo = require('gengojs/hapi');
var server = new require('hapi').Server();

server.register(gengo({
	'backend': { 'directory': __dirname + '/config/locales' },
	'header' : { 'default': 'en-us', supported: ['ja'] },
	'router': { 'enabled': true }
}), function(error) {
  if (error) console.log('An error occurred: ' + error);
});
```