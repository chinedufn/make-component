#!/usr/bin/env node

'use strict'

var meow = require('meow')
var makeNode = require('../src/make-node.js')
var makeStyle = require('../src/make-style.js')
var mkdirp = require('mkdirp')

var fs = require('fs')

var cli = meow({
  help: [
    'Usage',
    '  mco <component-name>'
  ]
})

var componentName = cli.input[0]

var nodeFilename = componentName + '-view.js'
var styleFilename = componentName + '_style.js'

var node = makeNode(componentName)
var style = makeStyle(componentName)

if (cli.flags.d) {
  mkdirp.sync(componentName)
  fs.writeFile(componentName + '/' + nodeFilename, node, function (err) {
    if (err) throw err
  })
  fs.writeFile(componentName + '/' + styleFilename, style, function (err) {
    if (err) throw err
  })
} else if (cli.flags.s) {
  console.log(style)
} else {
  console.log(node)
}
