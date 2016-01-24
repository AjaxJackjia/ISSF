var generateHeader = function() {
	var nav = {
		'Home': 'index.html',
		'About': 'about.html',
		'Committees': 'committees.html',
		'Submission': 'submission.html',
		'Guide': 'guide.html',
		'Registration': 'registration.html'
	};
	
	var $nav = $('<ul class="nav nav-main">');
	$.each(nav, function(key, value) {
		var lowerCaseKey = key == 'Home' ? 'index' : key.toLowerCase();
		if(location.href.indexOf(lowerCaseKey) > 0) 
			$nav.append('<li class="active"><a href="'+ value +'">' + key + '</a></li>');
		else
			$nav.append('<li><a href="'+ value +'">' + key + '</a></li>');
	});
	
	var $brand = $('<a class="brand" href="index.html">');
	$brand.append('<span alt="International Summit on Smart Finance 2016">ISSF 2016</span>');
	
	var $header = $('<header id="header" class="header header-fixed">');
	var $headerWrapper = $('<div class="wrapper">');
	
	$headerWrapper.append($brand);
	$headerWrapper.append($nav);
	$header.append($headerWrapper);
	
	return $header;
};

var generateFooter = function() {
	var nav =  '<ul class="nav nav-title">' + 
			   '	<li><h3>hosts</h3></li>' + 
			   '	<li><h3>contact us</h3></li>' + 
			   '	<li><h3>official wechat</h3></li>' + 
			   '</ul>' + 
			   '<ul class="nav nav-content">' + 
			   '	<li> ' + 
			   '		<div class="nav-content-item">Center on Global Internet Finance, City University of Hong Kong</div>' + 
			   '		<div class="nav-content-item">The College of Business, City University of Hong Kong</div>' + 
			   '	</li>' + 
			   '	<li> ' + 
			   '		<div class="nav-content-item">Tel 8888-8888888</div>' + 
			   '		<div class="nav-content-item">Tel 8888-8888888</div>' + 
			   '		<div class="nav-content-item">Fax 8888-8888888</div>' + 
			   '		<div class="nav-content-item">Email 8888-8888888</div>' + 
			   '	</li>' + 
			   '	<li> ' + 
			   '		<img class="nav-content-img" src="res/images/img-ewm.png"/>' + 
			   '	</li>' + 
			   '</ul>';
	
	var copyright =    '<div class="copyright">' + 
					   '	Copyright © ' + (new Date()).getFullYear() + ' <span>CityU</span> All rights reserved.' + 
					   '</div>';
	
	var $footer = $('<footer id="footer" class="footer">');
	var $footerWrapper = $('<div class="wrapper">');
	$footerWrapper.append(nav);
	$footerWrapper.append(copyright);
	$footer.append($footerWrapper);
	
	return $footer;
};

var initHeaderAndFooter = function() {
	var $container = $('body > .container');
	
	//module
	var header = generateHeader();
	var footer = generateFooter();
	
	//module setup
	$container.before(header);
	$container.after(footer);
	
	//initialize header with headroom
	var header = document.getElementById("header");
	var headroom = new Headroom(header, {
	  "tolerance": 5,
	  "offset": 70,
	  "classes": {
	    "initial": "animated",
	    "pinned": "slideDown",
	    "unpinned": "slideUp"
	  }
	});
	headroom.init();
};
