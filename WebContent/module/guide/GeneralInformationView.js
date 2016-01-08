define([ 'backbone', 'util' ], function(Backbone, util) {
	var GeneralInfomationView = Backbone.View.extend({
		
		className: 'call-for-papers-view',
		
		initialize: function(){
			//确保在正确作用域
			_.bindAll(this, 'render');
			
			this.p1 = 'Big data have been embraced as a disruptive technology that will reshape business in many domains. E-Commerce is one such domain that involves huge amount of data. The purpose of this workshop is to bring together people from academia, industry, and government, and provide a forum to discuss new research directions in the area of big data commerce. A critical goal of the workshop is to cultivate high quality research publications concerning Big Data Commerce, which capitalizes on recent technological advances such as cloud computing, mobile commerce, and big data analytics to advance electronic commerce. Given the nature and purposes of this workshop, we invite submission of Extended Abstract (up to three pages). ';
		},
		
		render: function(){
			$(this.el).append('<p>' + this.p1 + '</p>');
			
			$(this.el).append('<p>' + this.p1 + '</p>');
			
			return this;
		}
	});
	
	return GeneralInfomationView;
});

