const VERSION = require('../packages/basic/package.json').version;
const run = require('./index.js');

module.exports = function() { run(`@nickgraffis/eslint-basic`, VERSION) };