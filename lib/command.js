module.exports = function command(scope) {
	var toCall;
    var response = {};

    switch(scope.label) {
    	case 'wakeLan':
	    	return gladys.param.getValues(['WAKEONLAN_mac'])
	        .spread((WAKEONLAN_mac) => {
		    
			    const wol = require('wol');

				wol.wake(WAKEONLAN_mac, function(err, res){
				  console.log(res);
				});

	        });


	       toCall = gladys.modules.wakeonlan.lib.wakelan();
	       response.label= 'pcopen';
	       return response;
	       break;

	    default:
        	toCall = Promise.reject(`no-command-detected`);
        break;

       }
       return toCall;
    }