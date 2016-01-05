define([ 'backbone', 'util' ], function(Backbone, util) {
	var HeaderView = Backbone.View.extend({
		
		tagName: 'header',
		
		className: 'header header-fixed',
		
		id: 'header',
		
		initialize: function(){
			_.bindAll(this, 'render');
			
			//navigation
			this.nav = {
				'Home': 'index.html',
				'About': 'about.html',
				'Committee': 'committee.html',
				'Agenda': 'agenda.html',
				'Guide': 'guide.html',
				'Registration': 'registration.html'
			};
		},
		
		render: function(){
			var $nav = $('<ul class="nav nav-main">');
			_.each(this.nav, function(value, key) {
				$nav.append('<li><a href="'+ value +'">' + key + '</a></li>');
			});
			
			var $brand = $('<a class="brand" href="index.html">');
			$brand.append('<span alt="International Summit on Smart Finance 2016">ISSF 2016</span>');
			
			var $headerWrapper = $('<div class="wrapper">');
			
			$headerWrapper.append($brand);
			$headerWrapper.append($nav);
			
			$(this.el).append($headerWrapper);
			
			return this;
		}
	});
	
	return HeaderView;
});