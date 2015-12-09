#!/usr/bin/env node

'use strict'

var meow = require('meow')
var makeNode = require('../src/make-node.js')
var makeStyle = require('../src/make-style.js')

var cli = meow({
  help: [
    'Usage',
    '  mco <component-name>'
  ]
})

var componentName = cli.input[0]
if (cli.flags.s) {
  console.log(makeStyle(componentName))
} else {
  console.log(makeNode(componentName))
}
