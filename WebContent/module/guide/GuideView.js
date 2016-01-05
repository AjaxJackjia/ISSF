define([ 'backbone', 'util' ], function(Backbone, util) {
	var GuideView = Backbone.View.extend({
		
		className: 'guide-view',
		
		initialize: function(){
			//确保在正确作用域
			_.bindAll(this, 'render');
			
			this.introduction = 'Coming soon...'
		},
		
		render: function(){
			var tpl = 
				'<h1>Guide</h1>' + 
				'<h1>' + this.introduction + '</h1>';
			$(this.el).append(tpl);
			
			return this;
		}
	});
	
	return GuideView;
});
