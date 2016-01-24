(function(win){
	//设置语言
	var locale = sessionStorage.getItem('lang') || 'en-us';
	var mapping = i18n_about_page[locale];
	
	//设置内容
	
	
	//初始化页面顶部和底部
	initHeaderAndFooter();
})(window);
