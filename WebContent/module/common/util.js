Util = (function() {
	var appName = 'ISSF'
	
	var load = function(url, callback) {
		$.get(url, function(data){
		    if(typeof callback == 'function') {
		    	callback(data);
		    }
		});
	};
	
	return {
		appName: appName,
		load: load
	}
}());