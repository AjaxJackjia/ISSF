define([ 
         'backbone', 'util', 
         './CallForPapersView', './PaperSubmissionView'
       ], function(Backbone, util, CallForPapersView, PaperSubmissionView) {
	var PapersView = Backbone.View.extend({
		
		className: 'papers-view',
		
		initialize: function(){
			//确保在正确作用域
			_.bindAll(this, 'render');
		},
		
		render: function(){
			var $title = $('<h1 class="papers-title">Welcome to submit papers to ISSF 2016</h1>');
			var $menuHeader = $(MenuHeader_template());
			var $menuContent = $(MenuContent_template());
			
			$(this.el).append($title);
			$(this.el).append($menuHeader);
			$(this.el).append($menuContent);
			
			var cfp = new CallForPapersView();
			var ps = new PaperSubmissionView();
			
			$('#cfp', this.el).append($(cfp.render().el));
			$('#ps', this.el).append($(ps.render().el));
			
			return this;
		}
	});
	
	var MenuHeader_template = function() {
		var menu_tpl = 
			'<ul class="papers-menu nav nav-tabs" role="tablist">' + 
			'  <li role="presentation" class="active">' + 
			'		<a href="#cfp" aria-controls="cfp" role="tab" data-toggle="tab">Call for Papers</a>' + 
			'  </li>' + 
			'  <li role="presentation">' + 
			'  		<a href="#ps" aria-controls="ps" role="tab" data-toggle="tab">Paper Submission</a>' + 
			'  </li>' + 
			'</ul>';
		
		return menu_tpl;
	};
	
	var MenuContent_template = function() {
		var content_tpl = 
			'<div class="papers-content tab-content">' + 
			'  <div role="tabpanel" class="tab-pane fade in active" id="cfp"></div>' + 
			'  <div role="tabpanel" class="tab-pane fade" id="ps"></div>' + 
			'</div>';
		
		return content_tpl;
	}; 
	
	
	return PapersView;
});

