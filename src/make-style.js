var camelCase = require('camelcase')

module.exports = MakeStyle

var viewports = [
  'wrist',
  'palm',
  'lap',
  'desk',
  'wall'
]

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
    componentStyle += createViewportStyle(styleName, viewports[key])
  }

  componentStyle += 'module.exports = ' + styleName + '\n'

  return componentStyle
}

function createViewportStyle (styleName, viewportName) {
  var viewportStyle = '' +
  styleName + '.' + viewportName + ' = ' + 'extend(' + styleName + '.base, {\n' +
  '})\n\n'

  return viewportStyle
}
