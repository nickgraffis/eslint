const VERSION = require('..packages/typescript/package.json').version;
const run = require('./index.js');

module.exports = function() { run(`@nickgraffis/eslint-ts`, VERSION) };