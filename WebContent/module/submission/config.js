({
    baseUrl: ".",
    name: "main",
    out: "build.js",
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
})
