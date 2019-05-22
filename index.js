module.exports = function(sails) {


	function wakeLan(){
		return gladys.param.getValues(['WAKEONLAN_mac'])
        .spread((WAKEONLAN_mac) => {
	            var wol = require('node-wol');
	 
		wol.wake(WAKEONLAN_mac);
		 
		wol.wake(WAKEONLAN_mac, function(error) {
		  if(error) {
		    return reject(new Error('Erreur lors du démarrage'));
		  }
		});
		 
		var magicPacket = wol.createMagicPacket(WAKEONLAN_mac);
        });
	}

	
	return {
		wakeLan:wakeLan
	};
};