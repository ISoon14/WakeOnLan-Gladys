
module.exports = function(sails) {

	var wake = require('./lib/wake.js');
	var command = require('./lib/command.js');
	var install = require('./lib/install.js')

	console.log('test');

	return{
		install:install,
		command:command,
		wake:wake,
	};

}