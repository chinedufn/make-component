var extend = require('xtend')

var SomeComponentStyle = {}
SomeComponentStyle.base = {
}

SomeComponentStyle.wrist = extend(SomeComponentStyle.base, {
})

SomeComponentStyle.palm = extend(SomeComponentStyle.wrist, {
})

SomeComponentStyle.lap = extend(SomeComponentStyle.palm, {
})

SomeComponentStyle.desk = extend(SomeComponentStyle.lap, {
})

SomeComponentStyle.wall = extend(SomeComponentStyle.desk, {
})

module.exports = SomeComponentStyle
