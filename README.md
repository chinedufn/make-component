make-component [![npm version](https://badge.fury.io/js/make-component.svg)](http://badge.fury.io/js/make-component) [![Build Status](https://travis-ci.org/chinedufn/make-component.svg?branch=master)](https://travis-ci.org/chinedufn/make-component)
==============

> Generate virtual-dom components files

## Background / Why?

The less of your application that you need to think about when making changes, the easier it is to build complex features

- every dom element should have its own file
- your app's directory tree should mimic your DOM tree
- given the running web app and the source code, it should be easy to find where to make a change

Todo:

- Back up / better explain the above
- Add a Pros and Cons section to this approach
- Maybe link to a gist explaining how I arrived at building my components this way

In the meantime I recommend using `mco some-component-name -d` for everything

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
$ mco component-name -d # dump out a component folder with the node and its styles
```

#### Finding Things

Inspect element and look at the `filepath` attribute to see exactly where the component's source lives

## License

MIT
