var h = require('virtual-dom/h')

var style = require('./some-component_style.js')

module.exports = {
  render: RenderSomeComponent
}

function RenderSomeComponent (viewport) {
  var someComponentStyle = style[viewport] || style.base

  var renderedSomeComponent = h('div', {
    style: someComponentStyle
  }, [
  ])

  return renderedSomeComponent
}
