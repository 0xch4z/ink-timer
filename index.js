#!/usr/bin/env node

'use strict';

const importJsx = require('import-jsx');
const {h, render} = require('ink');
const meow = require('meow');

const ui = importJsx('./ui');

const cli = meow(`
  Usage
    $ timer [input]

  Options
    --seconds 25 [default: 10]
`);

render(h(ui, cli.flags));
