'use strict'

var State = require('dover')
var Observ = require('observ')
var watch = require('observ/watch')
var pipe = require('value-pipe')
var phone = require('phones')
var extend = require('xtend')
var h = require('virtual-dom/h')
var changeEvent = require('value-event/change')

module.exports = PhoneInput

function PhoneInput (data) {
  data = data || {}

  var state = State({
    value: Observ(data.value || ''),
    valid: Observ(false),
    channels: {
      change: change
    }
  })

  watch(state.value, pipe(phone.validate, state.valid.set))

  return state
}

function change (state, data) {
  state.value.set(phone.parse(data[data.name]))
}

var defaults = {
  type: 'tel',
  name: 'phone'
}

PhoneInput.render = function render (state, options) {
  options = extend(defaults, options || {})

  options = extend(options, {
    value: phone.format(state.value, options.separator),
    'ev-event': changeEvent(state.channels.change, {
      name: options.name
    })
  })

  return h('input', options)
}
