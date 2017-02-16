#!/usr/bin/env node
'use strict'

module.exports = declareLove
function declareLove (thing) {
  return `I love ${thing}`
}

console.log(declareLove('cats'))
