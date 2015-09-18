'use strict'

var test = require('tape')
var raf = require('raf')
var dispatchEvent = require('dispatch-event')
var thermometer = require('thermometer')
var PhoneInput = require('./')

var render = thermometer.createComponent(PhoneInput)

test('state to dom', function (t) {
  t.plan(1)
  render(function (state, element, done) {
    state.value.set('4155550000')
    raf(function () {
      t.equal(element.value, '415-555-0000')
      done()
    })
  })
})

test('dom to state', function (t) {
  t.plan(2)
  render(function (state, element, done) {
    element.value = '415-555-1111'
    dispatchEvent(element, 'input', {
      bubbles: true
    })
    raf(function () {
      t.equal(state.value(), '4155551111')
      t.equal(state.valid(), true)
      done()
    })
  })
})
