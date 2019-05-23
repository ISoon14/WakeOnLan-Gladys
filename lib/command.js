module.exports = function command(scope) {

	var response = {};



	switch(scope.label) {
		case 'wakeLan':
			response.label = 'pcopen';
            toCall = gladys.modules.wakeonlan.wake();

            return response
		break;

	}
	return toCall;
}