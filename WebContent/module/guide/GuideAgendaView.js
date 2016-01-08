define([ 'backbone', 'util' ], function(Backbone, util) {
	var AgendaView = Backbone.View.extend({
		
		className: 'agenda-view',
		
		initialize: function(){
			//确保在正确作用域
			_.bindAll(this, 'render');
			
			this.arrangements = [
			    {
			    	date: 'May 20, 2016',
			    	activities: [
			    	    {
			    	    	time: '09:30-11:30',
			    	    	location: 'CityU Hall',
			    	    	activity: 'Opening Ceremony (Please produce your invitation when entering the venue)'
			    	    },
			    	    {
			    	    	time: '10:30-11:30',
			    	    	location: 'CityU Hall',
			    	    	activity: 'Opening Ceremony (Please produce your invitation when entering the venue)'
			    	    }
			    	]
			    },
			    {
			    	date: 'May 21, 2016',
			    	activities: [
			    	    {
			    	    	time: '10:30-11:30',
			    	    	location: 'CityU Hall',
			    	    	activity: 'Opening Ceremony (Please produce your invitation when entering the venue)'
			    	    },
			    	    {
			    	    	time: '10:30-11:30',
			    	    	location: 'CityU Hall',
			    	    	activity: 'Opening Ceremony (Please produce your invitation when entering the venue)'
			    	    }
			    	]
			    }
			];
		},
		
		render: function(){
			$(this.el).append(_.template(this.arrangement_template())({arrangements: this.arrangements}));
			
			return this;
		},
		
		arrangement_template: function() {
			return  '<div class="arrangements">' + 
					'<%_.each(arrangements, function(arrangement) {%>' + 
					'	<div class="arrangement">' + 
					'		<h3><%=arrangement.date%></h3>' + 
					'		<table class"table">' + 
					'			<tbody>' +
					'				<tr class="table-head">' +
					'					<td class="time">Time</td>' +
					'					<td class="location">Location</td>' +
					'					<td class="activity">Activity</td>' +
					'				</tr>' +
					'				<%_.each(arrangement.activities, function(item, index) {%>' + 
					'					<tr class="<%- index%2==0?"tr-even":"tr-od" %>">' +
					'						<td class="time"><%=item.time%></td>' +
					'						<td class="location"><%=item.location%></td>' +
					'						<td class="activity"><%=item.activity%></td>' +
					'					</tr>' +
					'				<%});%> ' + 
					'			</tbody>' +
					'		</table>' + 
					'	</div>' + 
					'<%});%> ' + 
					'</div>';
		}
	});
	
	return AgendaView;
});

