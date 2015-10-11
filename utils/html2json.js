'use strict';
var jsdom = require("jsdom"),
  gutil = require("gulp-util"),
  through2 = require("through2"),
  pluginName = "gulp-dom",
  Path = require('path');

function getDir(path) {
  return /dist\/([\s\S]+)\/[\s\S]+/g
    .exec(Path.normalize(path))[1];
}

function getFileName(path){
  return /dist\/[\s\S]+\/([\s\S]+)/g
    .exec(Path.normalize(path))[1];
}

function mutator($, window, path) {
  var json = {};
  var dir = getDir(path);
  var counts = {
    p: 1,
    ul: 1,
    li: 1
  };
  $('div.gengo p').each(function () {
    json[getFileName(path).replace('.html', '') + '.p' + counts.p++] = $(this).html().replace(/\"/g, '\'');
  });

  $('ul').each(function () {
    counts.ul++;
    var ul = '.ul' + counts.ul;
    $(this).find('li.gengo').each(function () {
      counts.li++;
      var li = '.li' + counts.li;
      json[getFileName(path).replace('.html', '') + ul + li] = $(this).html().replace(/\"/g, '\'');
    });
  });
  return JSON.stringify(json, null, 2);
}

module.exports = function () {
  var stream = through2.obj(function (file, enc, callback) {

    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return stream.emit("error", new gutil.PluginError(pluginName, "Streaming not supported"));
    }

    if (file.isBuffer()) {
      jsdom.env({
        scripts: ["http://code.jquery.com/jquery.js"],
        html: file.contents.toString("utf8"),
        done: function (errors, window) {
          var path = file.path;
          if (errors) {
            return stream.emit("error", new gutil.PluginError(pluginName, "Error parsing document: " + file.path));
          }
          var mutated = mutator.apply(window, [window.$, window, path]);;
          file.contents = new Buffer(mutated);
          file.path = gutil.replaceExtension(file.path, '.json');
          callback(null, file);
          window.close();
        }
      });
    }

  });

  return stream;
};