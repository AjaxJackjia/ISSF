define([ 'backbone', 'util' ], function(Backbone, util) {
	var RegistrationView = Backbone.View.extend({
		
		className: 'registration-view',
		
		initialize: function(){
			//确保在正确作用域
			_.bindAll(this, 'render');
			
			this.introduction = 'Coming soon...'
		},
		
		render: function(){
			var tpl = 
				'<h1>Registration</h1>' + 
				'<h1>' + this.introduction + '</h1>';
			$(this.el).append(tpl);
			
			return this;
		}
	});
	
	return RegistrationView;
});


