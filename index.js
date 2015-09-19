'use strict'

var Input = require('base-input')
var phone = require('phones')

module.exports = Input({
  parse: phone.parse,
  format: phone.format,
  validate: phone.validate,
  options: {
    type: 'tel',
    name: 'phone'
  }
})
