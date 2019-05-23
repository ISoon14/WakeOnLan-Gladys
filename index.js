module.exports = function(sails) {

	 var command = require('./lib/command.js');
	 var install = require('./lib/install.js');


	return {
		wakeLan:require('./lib/wakelan.js'),
	};
};