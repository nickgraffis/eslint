const VERSION = require('../packages/vue/package.json').version;
const run = require('./index.js');

module.exports = function() { run(`@nickgraffis/eslint-vue`, VERSION) };