#!/usr/bin/env node

'use strict';

const docopt = require('docopt').docopt;
const params = docopt(`
  Usage:
    server-fw <command>

  Commands:
    start
`);

console.log(params);

if (params['<command>'] === 'start'){
  require('./server.js');
  return;
}
