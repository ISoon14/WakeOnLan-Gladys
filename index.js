module.exports = function(sails) {


	return {
		install: require('./lib/install.js'),
		wakeLan:require('./lib/wakelan.js'),
	};
};