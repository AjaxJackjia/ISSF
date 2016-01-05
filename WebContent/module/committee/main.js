(function(win){
	require.config({
		paths: {
			'jquery': '../../lib/jquery/dist/jquery.min',
			'backbone': '../../lib/backbone/backbone',
			'underscore': '../../lib/underscore/underscore-min',
			'bootstrap' : '../../lib/bootstrap/dist/js/bootstrap.min',
			'cookie' : '../../lib/jquery.cookie/jquery.cookie',
			'headroom': '../../lib/headroom.js/dist/headroom.min',
			'i18n': '../../lib/i18n/i18n',
			'util': '../common/util'
		},
		
		shim: {
	        'underscore': {
	            exports: '_'
	        },
	        'jquery': {
	            exports: '$'
	        },
	        'backbone': {
	            deps: ['underscore', 'jquery'],
	            exports: 'Backbone'
	        },
	        'bootstrap': {  
	            deps : [ 'jquery' ],  
	            exports : 'bootstrap'
	       },
	       'headroom': {
	        	exports: 'Headroom'
	       },
		}  
	});

	require(['backbone', 'bootstrap', 'cookie', '../common/init', 'CommitteeView'], function(Backbone, bootstrap, cookie, Init, CommitteeView) {
		//设置用户预设的语言
		require.config({
			locale: $.cookie('userlang') || 'en-us', 
		});
		
		//初始化页面顶部和底部
		Init.initHeaderAndFooter();
		
		//加载页面
		var committee = new CommitteeView();
		$('body > .container').append($(committee.render().el));

	});
})(window);
