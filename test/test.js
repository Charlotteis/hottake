'use strict'

const tap = require('tap')
const declareLove = require('../index.js')

tap.equal('I love pizza', declareLove('pizza'))
