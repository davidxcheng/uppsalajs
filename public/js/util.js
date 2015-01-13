(function() {
	window.$ = function(arg) {

		var el = arg.constructor.name == "String"
					? document.querySelector(arg)
					: arg;
		
		function sub(eventName, cb) {
			this.addEventListener(eventName, cb);
		};

		return {
			on: sub.bind(el)
		};
	}
})();