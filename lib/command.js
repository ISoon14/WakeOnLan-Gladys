module.exports = function command(scope) {

	switch(scope.label) {
		case 'wakeLan':
			response.label = 'pcopen';
            toCall = gladys.modules.wakeonlan.lib.wake();
            return response
		break;

	}
	return toCall;
}