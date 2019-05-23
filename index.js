

module.exports = function(sails) {

	function wake(){
		console.log('test');
	}
	

	return{
		wake:wake
	};

}