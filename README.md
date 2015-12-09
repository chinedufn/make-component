make-component [![npm version](https://badge.fury.io/js/make-component.svg)](http://badge.fury.io/js/make-component) [![Build Status](https://travis-ci.org/chinedufn/make-component.svg?branch=master)](https://travis-ci.org/chinedufn/make-component)
==============

> Generate virtual-dom components

Using this to generate front-end components. Will clean up / improve API incrementally

Todo: Add a background info section to README

## To Install

```
$ npm install --save make-component
```

For the CLI:

```
$ npm install --global make-component
```

## Usage

#### API

```js
var makeNode = require('make-component').makeNode
var makeStyle = require('make-component').makeStyle

// component node string
makeNode('component-name')

// component style string
makeStyle('component-name')
```

#### CLI

```sh
$ mco component-name > ./path/to/dir/component-name.js
$ mco component-name -s > ./path/to/dir/component-name_style.js
```

## License

MIT
