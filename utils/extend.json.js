var fs = require('fs-extra'),
	Path = require('path'),
	_ = require('lodash');

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(Path.join(path, file)).isDirectory();
  });
}
/**
 * Extends/Combines the JSON files.
 */
module.exports = function (src, dest) {
	try {
		var dirs = getDirectories(src);
		dirs.forEach(function (directory) {
			var buffer = [];
			var dir = Path.join(src, directory);
			var files = fs.readdirSync(dir);
			files.forEach(function (file) {
				var f = dir + Path.sep + file;
				var json = fs.readJsonSync(f);
				if (buffer.length === 0 && !_.isEmpty(json)) buffer.push(json);
				else {
					if (!_.isEmpty(json)) buffer[0] = _.merge({}, buffer[0], json);
				}
			});
			fs.writeJsonSync(dest + directory + '.json', buffer[0]);
		});
	} catch (error) {
		console.warn(error);
	}

	return;
};