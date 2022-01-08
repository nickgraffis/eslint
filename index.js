#!/usr/bin/env node

const vue = require('./scripts/vue')
const basic = require('./scripts/basic')
const react = require('./scripts/react')
const typescript = require('./scripts/typescript')

if (process.argv[2] && process.argv[2] === '-basic') {
  basic()
} else if (process.argv[2] && process.argv[2] === '-ts') {
  typescript()
} else if(process.argv[2] && process.argv[2] === '-react') {
  react()
} else if(process.argv[2] && process.argv[2] === '-vue') {
  vue()
} else {
  console.log('Specify a eslint config (-basic, -ts, -react, -vue)');
}