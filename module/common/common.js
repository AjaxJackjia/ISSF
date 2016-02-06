//设置语言
var locale = sessionStorage.getItem('lang') || 'en-us';

//i18n for header and footer
var i18n_header_footer = {
	'en-us': {
		'issf': 'International Summit on Smart Finance 2016',
		'home': 'Home',
		'about': 'About',
		'committees': 'Committees',
		'submission': 'Submission',
		'guide': 'Guide',
		'registration': 'Registration',

		'host': 'hosts',
		'contact': 'contact us',
		'wechat': 'official wechat',
		'CGIF': 'Center on Global Internet Finance, City University of Hong Kong',
		'CB': 'The College of Business, City University of Hong Kong',
		'tel': 'Tel',
		'fax': 'Fax',
		'email': 'Email'
	},
	
	'zh-cn': {
		'issf': '2016国际智慧金融峰会',
		'home': '首页',
		'about': '关于',
		'committees': '组委会',
		'submission': '论文事宜',
		'guide': '指引',
		'registration': '注册',

		'host': '主办方',
		'contact': '联系我们',
		'wechat': '官方公众号',
		'CGIF': '香港城市大学国际互联网金融中心',
		'CB': '香港城市大学商学院',
		'tel': '电话',
		'fax': '传真',
		'email': '邮箱'
	}
};

var generateHeader = function() {
	var nav_key = [
		i18n_header_footer[locale]['home'],
		i18n_header_footer[locale]['about'],
		i18n_header_footer[locale]['committees'],
		i18n_header_footer[locale]['submission'],
		i18n_header_footer[locale]['guide'],
		i18n_header_footer[locale]['registration'],
	];

	var nav_value = [
		'index.html',
		'about.html',
		'committees.html',
		'submission.html',
		'guide.html',
		'registration.html'
	];

	var menuIndex = function() {
		var href = location.href;
		var menu = href.substring(href.lastIndexOf('/')+1);
		if(menu == '') {
			return 0;
		}
		for(var index = 0;index<6;index++) {
			if(menu == nav_value[index]) {
				return index;
			}
		}
	};
	
	var $nav = $('<ul class="nav nav-main">');
	$.each(nav_key, function(index, value) {
		if(menuIndex() == index) 
			$nav.append('<li class="active"><a href="'+ nav_value[index] +'">' + nav_key[index] + '</a></li>');
		else
			$nav.append('<li><a href="'+ nav_value[index] +'">' + nav_key[index] + '</a></li>');
	});
	
	var $brand = $('<a class="brand" href="index.html">');
	$brand.append('<span title="' + i18n_header_footer[locale]['issf'] + '">ISSF 2016</span>');
	
	var $header = $('<header id="header" class="header header-fixed">');
	var $headerWrapper = $('<div class="wrapper">');
	
	$headerWrapper.append($brand);
	$headerWrapper.append($nav);
	$header.append($headerWrapper);
	
	return $header;
};

var generateFooter = function() {
	var nav =  '<ul class="nav nav-title">' + 
			   '	<li><h3>' + i18n_header_footer[locale]['host'] + '</h3></li>' + 
			   '	<li><h3>' + i18n_header_footer[locale]['contact'] + '</h3></li>' + 
			   '	<li><h3>' + i18n_header_footer[locale]['wechat'] + '</h3></li>' + 
			   '</ul>' + 
			   '<ul class="nav nav-content">' + 
			   '	<li> ' + 
			   '		<div class="nav-content-item">' + i18n_header_footer[locale]['CGIF'] + '</div>' + 
			   '		<div class="nav-content-item">' + i18n_header_footer[locale]['CB'] + '</div>' + 
			   '	</li>' + 
			   '	<li> ' + 
			   '		<div class="nav-content-item">' + i18n_header_footer[locale]['tel'] + ' 0755-86581690</div>' + 
			   '		<div class="nav-content-item">' + i18n_header_footer[locale]['fax'] + ' 0755-86581690</div>' + 
			   '		<div class="nav-content-item">' + i18n_header_footer[locale]['email'] + ' <a href="mailto:2016issf@gmail.com">2016issf@gmail.com</a></div>' + 
			   '	</li>' + 
			   '	<li> ' + 
			   '		<img class="nav-content-img" src="res/images/website-url.png"/>' + 
			   '	</li>' + 
			   '</ul>';
	
	var copyright =    '<div class="copyright">' + 
					   '	Copyright © ' + (new Date()).getFullYear() + ' <span>CityU</span> All rights reserved.' + 
					   '</div>';
	
	var genLanguageItem = function() {
		var $tpl = $('<div class="switch-lang dropup">');
		var $tplBtn = $('<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">');
		var $tplList = $('<ul class="dropdown-menu" aria-labelledby="dropdownMenu">');
		
		if(locale == 'en-us') {
			$tplBtn.append('<span class="current-lang lang-item en-us">English</span> <span class="caret"></span>');
			$tplList.append('<li><span class="lang-item zh-cn">中文</span></li>');
		}else{
			$tplBtn.append('<span class="current-lang lang-item zh-cn">中文</span> <span class="caret"></span>');
			$tplList.append('<li><span class="lang-item en-us">English</span></li>');
		}
		
		$tpl.append($tplBtn);
		$tpl.append($tplList);
		
		return $tpl[0];
	};
	//add switch language function
	var $copyright = $(copyright);
	var $switchLanguage = genLanguageItem();
	$copyright.append($switchLanguage);

	var $footer = $('<footer id="footer" class="footer">');
	var $footerWrapper = $('<div class="wrapper">');
	$footerWrapper.append(nav);

	$footerWrapper.append($copyright);
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

	//switch lang
	$('ul.dropdown-menu > li').click(function(event) {
		$target = $(event.target).closest('li');
		if($target != null) {
			if($target.find('.en-us').length > 0) {
				sessionStorage.setItem('lang', 'en-us');
			}else{
				sessionStorage.setItem('lang', 'zh-cn');
			}
			location.reload();
			//scroll to top
			$('body').scrollTop(0);
		}
	});
};

//初始化页面顶部和底部
initHeaderAndFooter();
