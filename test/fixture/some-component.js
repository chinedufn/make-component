var style = require('./some-component_style.js')

module.exports = {
  render: RenderSomeComponent
}

function RenderSomeComponent (h, viewport, opts) {
  var someComponentStyle = style[viewport] || style.base

  var renderedSomeComponent = h('div', {
    attributes: { filepath: __filename },
    style: someComponentStyle
  }, [
  ])

  return renderedSomeComponent
}
