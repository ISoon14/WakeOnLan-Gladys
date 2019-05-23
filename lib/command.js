module.exports = function command(scope) {

	var response = {};

	var wake = require('./wakelan.js');

	switch(scope.label) {
		case 'wakeLan':
			response.label = 'pcopen';
            toCall = gladys.modules.wakeonlan.lib.wake();

            return response
		break;

	}
	return toCall;
}