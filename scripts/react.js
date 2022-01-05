const VERSION = require('../packages/react/package.json').version;
const run = require('./index.js');

module.exports = function() { run(`@nickgraffis/eslint-react`, VERSION) };