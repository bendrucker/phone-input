# phone-input [![Build Status](https://travis-ci.org/bendrucker/phone-input.svg?branch=master)](https://travis-ci.org/bendrucker/phone-input)

> US phone input component for virtual-dom

Parsing, formatting, and validation by [phones](https://github.com/bendrucker/phones)

## Install

```
$ npm install --save phone-input
```


## Usage

```js
var PhoneInput = require('phone-input')
var phoneInput = PhoneInput()

function render (state) {
  var vtree = PhoneInput.render(state)
  //=> use virtual-dom to patch vtree into real DOM
}

phoneInput(render)
```

## API

#### `PhoneInput(data)` -> `function`

Create a new phone input observable.

##### data

Type: `object`

The initial state of the input.

###### value

Type: `string`

The phone number, a string of digits with no punctuation.

#### `PhoneInput.validate(state)` -> `boolean`

Validate the current value.

#### `PhoneInput.render(state, options)` -> `object`

Render a phone state to a vtree object. `options` will be merged with the defaults (`{type: 'tel', name: 'phone'}`) and passed to [virtual-hyperscript](https://github.com/Matt-Esch/virtual-dom/tree/master/virtual-hyperscript). Set `options.separator` to change the default of dash-separated number groups.

## License

MIT © [Ben Drucker](http://bendrucker.me)
