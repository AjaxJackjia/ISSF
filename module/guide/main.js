(function(win){
	var mapping = i18n_about_page[locale];
	
	//设置内容
	$('.guide-view > h1').html(mapping.title);
	$('#agenda_title').html(mapping.agenda);
	$('#general_title').html(mapping.general_info);
	
	//subpage - arrangements
	var arrangements = [
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
	
	var generateArrangement = function(arrangement) {
		var activitiesTpl = '';
		var activities = arrangement.activities;
		for(var index = 0;index<activities.length;index++) {
			var trClass = index%2==0?"tr-even":"tr-od";
			activitiesTpl +=  '<tr class="' + trClass + '">' +
							  '	<td class="time">' + activities[index].time + '</td>' +
							  '	<td class="location">' + activities[index].location + '</td>' +
							  '	<td class="activity">' + activities[index].activity + '</td>' +
							  '</tr>';
		}
		
		var tpl = 	'<div class="arrangement">' + 
					'	<h3>' + arrangement.date + '</h3>' +
					'	<table class"table">' + 
					'		<tbody>' +
					'			<tr class="table-head">' +
					'				<td class="time">Time</td>' +
					'				<td class="location">Location</td>' +
					'				<td class="activity">Activity</td>' +
					'			</tr>' + activitiesTpl +
					'		</tbody>' +
					'	</table>' + 
					'</div>';
		return tpl;
	};
	
	for(var arrIndex = 0;arrIndex<arrangements.length;arrIndex++) {
		$('.arrangements').append(generateArrangement(arrangements[arrIndex]));
	}
	
	//subpage - general information
	var hotel_tpl = '<b>Option A: New Year Hotel, 4 star</b><br/>' + 
					'Distance from Conferece Venue: 1.7 Kilometre; <br/>' + 
					'Reserve from Ctrip.com: <a href="http://hotels.ctrip.com/hotel/57033.html?allianceid=20407&sid=451676&ouid=000401app-&utm_medium=&utm_campaign=&utm_source=&isctrip=#bd=baidu_map" target="_blank">New Year Hotel</a> <br/>' + 
					'More informaiton could get from <a href="http://www.sznewyearhotel.com/en/Home.aspx" target="_blank">click</a> <br/><br/><br/>' + 
					'<b>Option B: Grand View Hotel, 4 star</b><br/>' + 
					'Distance from Conferece Venue: 1.6 Kilometre;  <br/>' + 
					'Reserve from Ctrip.com: <a href="http://hotels.ctrip.com/hotel/533687.html?allianceid=20407&sid=451676&ouid=000401app-&utm_medium=&utm_campaign=&utm_source=&isctrip=#bd=baidu_map" target="_blank">Grand View Hotel</a> <br/><br/><br/>' + 
					'<b>Option C: Motel 268 Shenzhen Science Park Branch</b><br/>' + 
					'Distance from Conferece Venue: 1.7 Kilometre;  <br/>' + 
					'Reserve from Ctrip.com: <a href="http://hotels.ctrip.com/hotel/428322.html?allianceid=20407&sid=451676&ouid=000401app-&utm_medium=&utm_campaign=&utm_source=&isctrip=#bd=baidu_map" target="_blank">Motel 268</a> <br/><br/><br/>';
	
	$('.general-information-view').append(hotel_tpl);

})(window);
