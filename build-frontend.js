#!/usr/bin/env node

var nunjucks = require('nunjucks')
var program = require('commander');
var fs = require('fs');
var watch = require('watch');
var path = require('path');
 
program
  .option('-w --watch')
  .parse(process.argv);

template_folder = path.join(__dirname, 'templates')

opts = {"include": ['\\.html$', '\\.jinja$']}
fs.writeFile(path.join(__dirname, 'templates.js'), nunjucks.precompile(template_folder, opts))

if (program.watch) {
   watch.watchTree(template_folder, {'interval': 0.1}, function (f, curr, prev) {
     fs.writeFile(path.join(__dirname, 'templates.js'), nunjucks.precompile(template_folder, opts))
   })
}
