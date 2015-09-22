'use strict'

var Input = require('base-input')
var phone = require('phones')

module.exports = Input({
  parse: phone.parse,
  format: format,
  validate: phone.validate,
  options: {
    type: 'tel',
    name: 'phone'
  }
})

function format (value, options) {
  if (!value) return ''
  return phone.format(value, options.separator)
}
