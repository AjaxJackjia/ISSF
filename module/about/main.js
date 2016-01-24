(function(win){
	var mapping = i18n_about_page[locale];
	
	//设置内容
	$('#title').html(mapping.title);
	$('.meta > .time').html(mapping.time);
	$('.meta > .institute').html(mapping.institute);
	$('.meta > .location').html(mapping.location);
	
	$('#p1').html(mapping.p1);
	$('#p2').html(mapping.p2);
	$('#p3').html(mapping.p3);
	$('#p4').html(mapping.p4);
	$('#p5').html(mapping.p5);
	$('#p6').html(mapping.p6);
	
	$('.important-dates > h3').html(mapping.date_title);
	$('#date1').html(mapping.date1);
	$('#date2').html(mapping.date2);
	$('#date3').html(mapping.date3);
	$('#date4').html(mapping.date4);
	$('#date5').html(mapping.date5);
	
	
})(window);
