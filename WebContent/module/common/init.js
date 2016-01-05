define([ 'headroom', '../common/HeaderView', '../common/FooterView' ], function(Headroom, HeaderView, FooterView) {
	return {
		initHeaderAndFooter: function() {
			var $container = $('body > .container');
			
			//module
			var header = new HeaderView();
			var footer = new FooterView();
			
			//module setup
			$container.before($(header.render().el));
			$container.after($(footer.render().el));
			
			//initialize header with headroom
			var header = document.getElementById("header");
			var headroom = new Headroom(header, {
			  "tolerance": 5,
			  "offset": 70,
			  "classes": {
			    "initial": "animated",
			    "pinned": "slideDown",
			    "unpinned": "slideUp"
			  }
			});
			headroom.init();
		}
	}
});