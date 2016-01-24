(function(win){
	//设置语言
	var locale = sessionStorage.getItem('lang') || 'en-us';
	var mapping = i18n_about_page[locale];
	
	//设置内容
	
	//调整carousel自适应高度
	var resizeCarousel = function() {
		var carouselHeight = $( window ).height() - 70;
		$('.home-view').find('.carousel-inner').css('height', carouselHeight + 'px');
	}
	resizeCarousel();
	$( window ).resize(function() {
		resizeCarousel();
	});
	
	//初始化页面顶部和底部
	initHeaderAndFooter();
})(window);
