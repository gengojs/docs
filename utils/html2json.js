'use strict';
var jsdom     = require("jsdom"),
  gutil       = require("gulp-util"),
  through2    = require("through2"),
  pluginName  = "gulp-dom",
  Path        = require('path'),
  _           = require('lodash');

function getDir(path) {
  return /dist\/([\s\S]+)\/[\s\S]+/g
    .exec(Path.normalize(path))[1];
}

function getFileName(path, strip) {
  var result = /dist\/[\s\S]+\/([\s\S]+)/g
    .exec(Path.normalize(path))[1];
  if (strip) return result.replace('.html', '');
  else return result;
}

function toSingleQuotes(str) {
  return str.replace(/\"/g, '\'');
}

function mutator($, window, path) {
  var json = {};
  json[getFileName(path, true)] = {};
  var dir = getDir(path);
  var counts = {
    p: 1,
    ul: 1,
    li: 1
  };
  $('div.gengo p').each(function () {
    var p = 'p' + counts.p++;
    json[getFileName(path, true)][p] = toSingleQuotes($(this).html());
  });

  $('ul').each(function () {
    var ul = 'ul' + counts.ul++;
    counts.li = 1;
    $(this).find('li.gengo').each(function () {
      var li = 'li' + counts.li++;
      if (!json[getFileName(path, true)][ul])
        json[getFileName(path, true)][ul] = {};
      json[getFileName(path, true)][ul][li] = toSingleQuotes($(this).html());
    });
  });
  console.log(getFileName(path, true), json);
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