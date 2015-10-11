var markdown  = require('markdown-it'),
		gutil     = require('gulp-util'),
		through   = require('through2');

var md = markdown({html:true})
        .use(require('markdown-it-container'), 'gengo')
        .use(require('markdown-it-container', 'table-reponsive'));

module.exports = function () {
  return through.obj(function (file, encoding, callback) {
    if (file.isNull() || file.content === null) {
      callback(null, file);
      return;
    }
    if (file.isStream()) {
      callback(new gutil.PluginError('gulp-markdown-it', 'stream content is not supported'));
      return;
    }
		try {
      file.contents = new Buffer(md.render(file.contents.toString()));
      file.path = gutil.replaceExtension(file.path, '.html');
      this.push(file);
    } catch (error) {
      callback(new gutil.PluginError('gulp-markdown-it', error, {
        fileName: file.path,
        showstack: true
      }));
    }
    callback();
  });
};