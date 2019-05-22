module.exports = function(sails) {


	function wakeLan(mac){
		
		return gladys.param.getValues(['WAKEONLAN_mac'])
        .spread((WAKEONLAN_mac) => {
            console.log(WAKEONLAN_mac);
        });
	}

	
	return {
		wakeLan:wakeLan
	};
};