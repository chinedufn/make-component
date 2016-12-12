var style = require('./some-component_style.js')

module.exports = {
  render: RenderSomeComponent
}

function RenderSomeComponent (h, state) {
  var someComponentStyle = style[state.viewport.range] || style.base

  var renderedSomeComponent = h('div', {
    attributes: { filepath: __filename },
    style: someComponentStyle
  }, [
  ])

  return renderedSomeComponent
}
