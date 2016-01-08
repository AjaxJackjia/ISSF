define([ 
         'backbone', 'util', 
         
         './GuideAgendaView', './GeneralInformationView' 
       ], function(Backbone, util, GuideAgendaView, GeneralInformationView) {
	var GuideView = Backbone.View.extend({
		
		className: 'guide-view',
		
		initialize: function(){
			//确保在正确作用域
			_.bindAll(this, 'render');
		},
		
		render: function(){
			var $title = $('<h1>Guide</h1>');
			var $menuHeader = $(GuideMenuHeader_template());
			var $menuContent = $(GuideMenuContent_template());
			
			$(this.el).append($title);
			$(this.el).append($menuHeader);
			$(this.el).append($menuContent);
			
			var agenda = new GuideAgendaView();
			var general = new GeneralInformationView();
			
			$('#agenda', this.el).append($(agenda.render().el));
			$('#general', this.el).append($(general.render().el));
			
			return this;
		}
	});
	
	var GuideMenuHeader_template = function() {
		var menu_tpl = 
			'<ul class="guide-menu nav nav-tabs" role="tablist">' + 
			'  <li role="presentation" class="active">' + 
			'		<a href="#agenda" aria-controls="agenda" role="tab" data-toggle="tab">Agenda</a>' + 
			'  </li>' + 
			'  <li role="presentation">' + 
			'  		<a href="#general" aria-controls="ps" role="tab" data-toggle="tab">General Information</a>' + 
			'  </li>' + 
			'</ul>';
		
		return menu_tpl;
	};
	
	var GuideMenuContent_template = function() {
		var content_tpl = 
			'<div class="guide-content tab-content">' + 
			'  <div role="tabpanel" class="tab-pane fade in active" id="agenda"></div>' + 
			'  <div role="tabpanel" class="tab-pane fade" id="general"></div>' + 
			'</div>';
		
		return content_tpl;
	}; 
	
	return GuideView;
});
