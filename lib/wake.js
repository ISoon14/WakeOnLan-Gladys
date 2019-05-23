module.exports = function wake(){

	
	return gladys.param.getValues(['WAKEONLAN_mac'])
    .spread((WAKEONLAN_mac) => {
    
	    const wol = require('wol');
	    console.log('démarrage');
		wol.wake(WAKEONLAN_mac, function(err, res){
		  console.log(res);
		});

    });
	


}

