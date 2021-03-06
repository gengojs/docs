'use strict';
var jsdom     = require("jsdom"),
  gutil       = require("gulp-util"),
  through2    = require("through2"),
  pluginName  = "gulp-i18n",
  _           = require('lodash'),
  Path        = require('path');
/**
 * Returns the file's name
 * @param {String} path The path of the file.
 * @return {String} The file's name
 */
function getFileName(path) {
  return /dist\/[\s\S]+\/([\s\S]+)/g
    .exec(Path.normalize(path))[1];
}

/**
 * Strips the script tags from the HTML.
 * @param {String} html The html to strip the tags.
 * @return {String} The script stripped HTML.
 */
function stripScripts(html) {
  var div = this.createElement('div');
  div.innerHTML = html;
  var scripts = div.getElementsByTagName('script');
  var i = scripts.length;
  while (i--) {
    scripts[i].parentNode.removeChild(scripts[i]);
  }
  return div.innerHTML;
}
/**
 * Returns the EJS placeholder for i18n
 */
function i18n(tag) {
  return '<%= __("' + tag + '") %>';
}

/**
 * Returns the unescaped EJS placeholder for i18n
 */
function unescapedi18n(tag){
  return '<%= _.unescape(__("' + tag + '")) %>';
}

/**
 * Mutates the HTML
 */
function mutator($, window, path) {
  var counts = {
    p: 1,
    ul: 1,
    li: 1,
    code:1
  };
  $('div.gengo p').each(function () {
    var tag = getFileName(path).replace('.html', '') + '.p' + counts.p++;
    $(this).text(i18n(tag));
  });
  
  $('div.gengo code').each(function () {
    var tag = getFileName(path).replace('.html', '') + '.code' + counts.code++;
    $(this).text(unescapedi18n(tag));
  });

  // $('ul').each(function () {
  //   var ul = 'ul' + counts.ul++;
  //   counts.li = 1;
  //   $(this).find('li.gengo').each(function () {
  //     var li = 'li' + counts.li++;
  //     var tag = getFileName(path).replace('.html', '') + '.ul' + counts.ul + '.li' + counts.li;
  //     $(this).text(i18n(tag));
  //   });
  // });

  return stripScripts.apply(this.document, [($('body').html())]);
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
          var mutated = mutator.apply(window, [window.$, window, path]);
          file.contents = new Buffer(_.unescape(mutated));
          file.path = gutil.replaceExtension(file.path, '.ejs');
          callback(null, file);
          window.close();
        }
      });
    }

  });

  return stream;
};