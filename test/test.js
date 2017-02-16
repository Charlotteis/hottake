'use strict'

const tap = require('tap')
const declareLove = require('../lib/declare-love.js')

tap.equal('I love cats', declareLove('cats'))
