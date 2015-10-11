## Introduction

:::gengo
gengo.js is a server agnostic i18n/l10n library that is powered by it's very small [core](https://github.com/gengojs/core).
Along with the core, it is also managed by six plugins.
The combinations of the these create a powerful and a unique library that enables developers to take over the core and extend its capabilities.
The core is essentially a unit that provides the basics such as a way of accessing a plugin's options or the plugin itself.
:::


## Usage

```bash
#npm install
sudo npm install gengojs --save
```

### Initialize

::: gengo
You can simply initialize gengo.js by requiring and configuring it. 
See Options.
:::

#### Express

```javascript
var gengo = require('gengojs');
var app = require('express')();

app.use(gengo({
	'backend': { 'directory': __dirname + '/config/locales' },
	'header' : { 'default': 'en-us', supported: ['ja'] },
	'router': { 'enabled': true }
}));
```

#### Koa

```javascript
var gengo = require('gengojs/koa');
var app = require('koa')();

app.use(gengo({
	'backend': { 'directory': __dirname + '/config/locales' },
	'header' : { 'default': 'en-us', supported: ['ja'] },
	'router': { 'enabled': true }
}));
```

#### Hapi

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