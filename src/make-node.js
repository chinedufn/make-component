var camelCase = require('camelcase')

module.exports = MakeNode

function MakeNode (componentName) {
  var camelCasedName = camelCase(componentName)
  var uppercaseName = camelCasedName.charAt(0).toUpperCase() + camelCasedName.slice(1)

  var componentNode = '' +
  "var h = require('virtual-dom/h')\n\n" +

  "var style = require('./" + componentName + "_style.js')\n\n" +

  'module.exports = {\n' +
  '  render: Render' + uppercaseName + '\n' +
  '}\n\n' +

  'function Render' + uppercaseName + ' (viewport) {\n' +
  '  var ' + camelCasedName + 'Style = style[viewport] || style.base\n\n' +
  '  var rendered' + uppercaseName + " = h('div', {\n" +
  '    attributes: {\n' +
    '      filepath: __filename\n' +
  '    },\n' +
  '    style: ' + camelCasedName + 'Style\n' +
  '  }, [\n' +
  '  ])\n\n' +
  '  return rendered' + uppercaseName + '\n' +
  '}'

  return componentNode
}
