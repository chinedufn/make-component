var fs = require('fs')
var makeComponentNode = require('../src/make-node.js')
var makeComponentStyle = require('../src/make-style.js')
var test = require('tape')

var componentNode = fs.readFileSync('./fixture/some-component.js', 'utf8')
var componentStyle = fs.readFileSync('./fixture/some-component_style.js', 'utf8')

test(function (t) {
  t.equal(makeComponentNode('some-component') + '\n', componentNode)
  t.end()
})

test(function (t) {
  t.equal(makeComponentStyle('some-component') + '\n', componentStyle)
  t.end()
})
