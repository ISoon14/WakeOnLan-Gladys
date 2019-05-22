module.exports = function(sails) {


	return {
		install: require('./lib/install.'),
		wakeLan:require('./lib/wakelan.js'),
		command:require('./lib/command.js')
	};
};