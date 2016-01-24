(function(win){
	//设置语言
	var locale = sessionStorage.getItem('lang') || 'en-us';
	var mapping = i18n_about_page[locale];
	
	//设置内容
	//subpage - call for paper
	var topics = [
		'Anti-money laundering',
		'Best financial practices in big data implementation',
		'Big data for corporate finance',
		'Big data for financial risk management ',
		'Big data for portfolio analysis ',
		'Big data visualization for finance ',
		'Bitcoin and virtual money ',
		'Complex analytics in big data',
		'Data quality for complex financial applications',
		'Detecting abnormality in financial big data ',
		'Fraud detection in financial big data ',
		'Integration of structured and unstructured financial data ',
		'Internet insurance ',
		'Mobile payment technologies ',
		'Network analytics in finance ',
		'Predictive analytics in financial services',
		'Scalable cloud data for finance ',
		'Security control in big data finance',
		'Time series trading data management and analysis',
		'High frequency financial trading',
		'Privacy Preservation in financial big data',
		'Data cleaning in financial big data',
		'Financial supply chain ',
		'Internet wealth management',
		'Governance of big data finance',
	];

	$.each(topics, function(index, value) {
		$('.topics').append('<li class="topic">' + value + '</li>');
	});

	$('.important-dates > h3').html(mapping.date_title);
	$('#date1').html(mapping.date1);
	$('#date2').html(mapping.date2);
	$('#date3').html(mapping.date3);
	$('#date4').html(mapping.date4);
	$('#date5').html(mapping.date5);

	//subpage - submission

	
	//初始化页面顶部和底部
	initHeaderAndFooter();
})(window);
