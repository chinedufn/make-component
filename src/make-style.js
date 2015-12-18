var camelCase = require('camelcase')

module.exports = MakeStyle

var viewports = ['wrist', 'palm', 'lap', 'desk', 'wall']
viewports.unshift('base')

function MakeStyle (componentName) {
  var camelCasedName = camelCase(componentName)
  var uppercaseName = camelCasedName.charAt(0).toUpperCase() + camelCasedName.slice(1)
  var styleName = uppercaseName + 'Style'

  var componentStyle = '' +
  "var extend = require('xtend')\n\n" +

  'var ' + styleName + ' = {}\n' +
  styleName + '.base = {\n' +
  '}\n\n'

  for (var key in viewports) {
    if (key !== '0') {
      componentStyle += createViewportStyle(styleName, viewports[key], viewports[key - 1])
    }
  }

  componentStyle += 'module.exports = ' + styleName

  return componentStyle
}

function createViewportStyle (styleName, viewportName, previousViewportName) {
  var viewportStyle = '' +
  styleName + '.' + viewportName + ' = ' + 'extend(' + styleName + '.' + previousViewportName + ', {\n' +
  '})\n\n'

  return viewportStyle
}
