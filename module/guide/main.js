(function(win){
	//设置语言
	var locale = sessionStorage.getItem('lang') || 'en-us';
	var mapping = i18n_about_page[locale];
	
	//设置内容
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
	var p1 = 'Big data have been embraof this workshop tract (up to three pages). ';
	for(var i = 0;i<10;i++) {
		$('.general-information-view').append(p1);
	}
	
	//初始化页面顶部和底部
	initHeaderAndFooter();
})(window);
