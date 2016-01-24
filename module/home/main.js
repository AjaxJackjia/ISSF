(function(win){
	var mapping = i18n_about_page[locale];
	
	//设置内容
	$('#basic_info1').html(mapping.basic_info1);
	$('#basic_info2').html(mapping.basic_info2);
	$('#basic_info3').html(mapping.basic_info3);
	$('#basic_info4').html(mapping.basic_info4);

	$('#sponsors_title').html(mapping.sponsors);

	//调整carousel自适应高度
	var resizeCarousel = function() {
		var carouselHeight = $( window ).height() - 70;
		$('.home-view').find('.carousel-inner').css('height', carouselHeight + 'px');
	}
	resizeCarousel();
	$( window ).resize(function() {
		resizeCarousel();
	});

})(window);
