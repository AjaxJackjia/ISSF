define([ 'backbone', 'util'], function(Backbone, util) {
	var FooterView = Backbone.View.extend({
		
		tagName: 'footer',
		
		className: 'footer',
		
		id: 'footer',
		
		initialize: function(){
			_.bindAll(this, 'render', 'nav', 'copyright');
		},
		
		render: function(){
			
			var $footerWrapper = $('<div class="wrapper">');
			
			$footerWrapper.append(this.nav());
			$footerWrapper.append(this.copyright());
			
			$(this.el).append($footerWrapper);
			
			return this;
		},
		
		nav: function() {
			return '<ul class="nav nav-title">' + 
				   '	<li><h3>hosts</h3></li>' + 
				   '	<li><h3>contact us</h3></li>' + 
				   '	<li><h3>official wechat</h3></li>' + 
				   '</ul>' + 
				   '<ul class="nav nav-content">' + 
				   '	<li> ' + 
				   '		<div class="nav-content-item">Center on Global Internet Finance, City University of Hong Kong</div>' + 
				   '		<div class="nav-content-item">The College of Business, City University of Hong Kong</div>' + 
				   '	</li>' + 
				   '	<li> ' + 
				   '		<div class="nav-content-item">Tel 8888-8888888</div>' + 
				   '		<div class="nav-content-item">Tel 8888-8888888</div>' + 
				   '		<div class="nav-content-item">Fax 8888-8888888</div>' + 
				   '		<div class="nav-content-item">Email 8888-8888888</div>' + 
				   '	</li>' + 
				   '	<li> ' + 
				   '		<img class="nav-content-img" src="res/images/img-ewm.png"/>' + 
				   '	</li>' + 
				   '</ul>';
		},
		
		copyright: function() {
			return '<div class="copyright">' + 
				   '	Copyright © ' + (new Date()).getFullYear() + ' <span>CityU</span> All rights reserved.' + 
				   '</div>';
		}
	});
	
	return FooterView;
});