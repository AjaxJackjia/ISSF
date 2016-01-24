(function(win){
	var mapping = i18n_about_page[locale];
	
	//设置内容
	$('.papers-title').html(mapping.title);
	$('#cfp_title').html(mapping.cfp_title);
	$('#ps_title').html(mapping.ps_title);
	$('#cfp_sub_title').html(mapping.cfp_sub_title);

	$('.important-dates > h3').html(mapping.important_dates_sub_title);
	$('#date1').html(mapping.date1);
	$('#date2').html(mapping.date2);
	$('#date3').html(mapping.date3);
	$('#date4').html(mapping.date4);
	$('#date5').html(mapping.date5);

	//subpage - call for paper
	var topics = [
		mapping.tp1,
		mapping.tp2,
		mapping.tp3,
		mapping.tp4,
		mapping.tp5,
		mapping.tp6,
		mapping.tp7,
		mapping.tp8,
		mapping.tp9,
		mapping.tp10,
		mapping.tp11,
		mapping.tp12,
		mapping.tp13,
		mapping.tp14,
		mapping.tp15,
		mapping.tp16,
		mapping.tp17,
		mapping.tp18,
		mapping.tp19,
		mapping.tp20,
		mapping.tp21,
		mapping.tp22,
		mapping.tp23,
		mapping.tp24,
		mapping.tp25
	];

	$.each(topics, function(index, value) {
		$('.topics').append('<li class="topic">' + value + '</li>');
	});

	//subpage - submission
	$('#submission_title').html(mapping.submission_title);
	$('#paper_position_due').html(mapping.paper_position_due);
	$('#easychair').html(mapping.easychair);
	$('#formatting_title').html(mapping.formatting_title);
	$('#formatting_content').html(mapping.formatting_content);	

})(window);
