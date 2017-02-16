#!/usr/bin/env node

const updater = require('update-notifier')
const pkg = require('./package.json')
updater({pkg}).notify()

const declareLove = require('./lib/declare-love')
console.log(declareLove('cats'))
