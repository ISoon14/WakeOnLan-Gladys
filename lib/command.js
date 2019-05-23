module.exports = {

	wake: function(){
		return gladys.param.getValues(['WAKEONLAN_mac'])
        .spread((WAKEONLAN_mac) => {
	    
		    const wol = require('wol');

			wol.wake(WAKEONLAN_mac, function(err, res){
			  console.log(res);
			});

        });
	}

};