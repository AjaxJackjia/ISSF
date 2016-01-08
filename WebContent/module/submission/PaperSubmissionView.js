define([ 'backbone', 'util' ], function(Backbone, util) {
	var PaperSubmissionView = Backbone.View.extend({
		
		className: 'paper-submission-view',
		
		initialize: function(){
			//确保在正确作用域
			_.bindAll(this, 'render');
			
			this.p1 = 'Big data have been embrac of this workshop, we invite submission of Extended Abstract (up to three pages). ';
		},
		
		render: function(){
			$(this.el).append('<p>' + this.p1 + '</p>');
			
			$(this.el).append('<p>' + this.p1 + '</p>');
			
			$(this.el).append('<p>' + this.p1 + '</p>');
			
			$(this.el).append('<p>' + this.p1 + '</p>');
			
			$(this.el).append('<p>' + this.p1 + '</p>');
			
			$(this.el).append('<p>' + this.p1 + '</p>');
			
			return this;
		}
	});
	
	return PaperSubmissionView;
});

