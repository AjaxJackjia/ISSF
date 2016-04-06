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
		'speakers': 'Speakers',
		'specialissues': 'Special Issues',
		'program': 'Program',
		'researchcamps': 'Research Camps',
		
		'home_value': 'index.html',
		'about_value': 'about.html',
		'committees_value': 'committees.html',
		'submission_value': 'submission.html',
		'guide_value': 'guide.html',
		'registration_value': 'registration.html',
		'speakers_value': 'speakers.html',
		'specialissues_value': 'specialissues.html',
		'program_value': 'program.html',
		'researchcamps_value': 'researchcamps.html',

		'host': 'hosts',
		'contact': 'Secretariat of ISSF 2016',
		'wechat': 'official wechat',
		'CGIF': 'Center on Global Internet Finance, City University of Hong Kong',
		'NSFC': 'National Natural Science Foundation of China',
		'CB': 'The College of Business, City University of Hong Kong',
		'tel': 'Tel',
		'fax': 'Fax',
		'email': 'Email',
		'address_title': 'Conference Address',
		'address': 'City University of Hong Kong SRI',
		'lang-title': '转换语言为中文'
	},
	
	'zh-cn': {
		'issf': '2016国际智慧金融峰会',
		'home': '首页',
		'about': '关于',
		'committees': '组委会',
		'submission': '论文投稿',
		'guide': '指引',
		'registration': '注册',
		'speakers': '主讲嘉宾',
		'specialissues': '发表机会',
		'program': '日程',
		'researchcamps': '竞赛研讨',
		
		'home_value': 'index_zh-cn.html',
		'about_value': 'about_zh-cn.html',
		'committees_value': 'committees_zh-cn.html',
		'submission_value': 'submission_zh-cn.html',
		'guide_value': 'guide_zh-cn.html',
		'registration_value': 'registration_zh-cn.html',
		'speakers_value': 'speakers_zh-cn.html',
		'specialissues_value': 'specialissues_zh-cn.html',
		'program_value': 'program_zh-cn.html',
		'researchcamps_value': 'researchcamps_zh-cn.html',

		'host': '主办方',
		'contact': 'ISSF 2016 秘书组',
		'wechat': '官方公众号',
		'CGIF': '香港城市大学国际互联网金融中心',
		'NSFC': '中国国家自然科学基金会',
		'CB': '香港城市大学商学院',
		'tel': '电话',
		'fax': '传真',
		'email': '邮箱',
		'address_title': '会议地址',
		'address': '香港城市大学深圳研究院',
		'lang-title': 'Change language to English'
	}
};

var generateHeader = function() {
	var nav_key = [
		//the first line
		i18n_header_footer[locale]['home'],
		i18n_header_footer[locale]['about'],
		i18n_header_footer[locale]['speakers'],
		i18n_header_footer[locale]['researchcamps'],
		i18n_header_footer[locale]['committees'],
		//the second line
		i18n_header_footer[locale]['program'],
		i18n_header_footer[locale]['guide'],
		i18n_header_footer[locale]['submission'],
		i18n_header_footer[locale]['specialissues'],
		i18n_header_footer[locale]['registration']
	];

	var nav_value = [
		//the first line
		i18n_header_footer[locale]['home_value'],
		i18n_header_footer[locale]['about_value'],
		i18n_header_footer[locale]['speakers_value'],
		i18n_header_footer[locale]['specialissues_value'],
		i18n_header_footer[locale]['committees_value'],
		//the second line
		i18n_header_footer[locale]['program_value'],
		i18n_header_footer[locale]['guide_value'],
		i18n_header_footer[locale]['submission_value'],
		i18n_header_footer[locale]['researchcamps_value'],
		i18n_header_footer[locale]['registration_value']
	];

	var menuIndex = function() {
		var href = location.href;
		var menu = href.substring(href.lastIndexOf('/')+1);
		if(menu == '') {
			return 0;
		}
		for(var index = 0;index<10;index++) {
			if(menu == nav_value[index]) {
				return index;
			}
		}
	};
	
	var $nav = $('<div class="nav nav-main">');
	var $firstLine = $('<div class="firstline">');
	var $secondLine = $('<div class="secondline">');
	$.each(nav_key, function(index, value) {
		if(index <= 4) {
			if(menuIndex() == index) 
				$firstLine.append('<div class="menu-item active"><a href="'+ nav_value[index] +'">' + nav_key[index] + '</a></div>');
			else
				$firstLine.append('<div class="menu-item"><a href="'+ nav_value[index] +'">' + nav_key[index] + '</a></div>');
		}else{
			if(menuIndex() == index) 
				$secondLine.append('<div class="menu-item active"><a href="'+ nav_value[index] +'">' + nav_key[index] + '</a></div>');
			else
				$secondLine.append('<div class="menu-item"><a href="'+ nav_value[index] +'">' + nav_key[index] + '</a></div>');
		}
	});
	$nav.append($firstLine);
	$nav.append($secondLine);
	
	var genLanguageItem = function() {
		var $tpl = $('<div class="switch-lang dropdown">');
		var $tplBtn = $('<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">');
		var $tplList = $('<ul class="dropdown-menu" aria-labelledby="dropdownMenu">');
		
		if(locale == 'en-us') {
			$tplBtn.append('<span class="current-lang lang-item en-us"></span> <span class="caret"></span>');
			$tplList.append('<li><span class="lang-item zh-cn"></span></li>');
		}else{
			$tplBtn.append('<span class="current-lang lang-item zh-cn"></span> <span class="caret"></span>');
			$tplList.append('<li><span class="lang-item en-us"></span></li>');
		}
		
		$tpl.append($tplBtn);
		$tpl.append($tplList);
		
		return $tpl[0];
	};
	
	var genLanguageItem_new = function() {
		var $tpl = $('<div class="switch-lang-new" title="' + i18n_header_footer[locale]['lang-title'] + '">');		
		if(locale == 'en-us') {
			$tpl.append('<img class="zh-cn" src="res/images/zh_cn.png" /><div class="title">&nbsp;&nbsp;中文</div>');
		}else{
			$tpl.append('<img class="en-us" src="res/images/en_us.png" /><div class="title">&nbsp;&nbsp;English</div>');
		}
		return $tpl[0];
	};
	
	var $switchLanguage = genLanguageItem_new();
	
	var $brand = $('<div class="brand">');
	$brand.append($switchLanguage);
	$brand.append('<a title="' + i18n_header_footer[locale]['issf'] + '" href="' + i18n_header_footer[locale]['home_value'] + '">ISSF 2016</a>');
	
	
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
			   '</ul>' + 
			   '<ul class="nav nav-content">' + 
			   '	<li> ' + 
			   '		<div class="nav-content-item">' + i18n_header_footer[locale]['CGIF'] + '</div>' + 
			   '		<div class="nav-content-item">' + i18n_header_footer[locale]['NSFC'] + '</div>' + 
			   '	</li>' + 
			   '	<li> ' + 
			   '		<div class="nav-content-item">' + i18n_header_footer[locale]['email'] + ' <a href="mailto:2016issf@gmail.com">2016issf@gmail.com</a></div>' + 
			   '		<div class="nav-content-item">' + i18n_header_footer[locale]['address_title'] + ' <a href="javascript:void(0);" style="text-decoration:none;">' + i18n_header_footer[locale]['address'] + '</a></div>' + 
			   '	</li>' + 
			   '</ul>';
	
	var copyright =    '<div class="copyright">' + 
							i18n_header_footer[locale]['email'] + ' <a href="mailto:2016issf@gmail.com">2016issf@gmail.com</a> / <a href="' + i18n_header_footer[locale]['guide_value'] + '#map" target="_blank" style="text-decoration:none;">' + i18n_header_footer[locale]['address_title'] + '</a> / Copyright © ' + (new Date()).getFullYear() + ' <span>CityU</span> All rights reserved.' + 
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
	//$copyright.append($switchLanguage);

	var $footer = $('<footer id="footer" class="footer">');
	var $footerWrapper = $('<div class="wrapper">');
	//$footerWrapper.append(nav);
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
	//headroom.init(); //为了保持兼容性，暂时不适用headroom

	//switch lang
	/*
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
	*/
	$('.switch-lang-new').click(function(event) {
		$target = $('.switch-lang-new > img');
		if($target != null) {
			if($target.hasClass('en-us')) {
				sessionStorage.setItem('lang', 'en-us');
			}else{
				sessionStorage.setItem('lang', 'zh-cn');
			}
				
			//refresh page according to language
			var pageIndexBegin = location.href.lastIndexOf('/');
			var dotBegin 	   = location.href.lastIndexOf('.');
			if(dotBegin <= pageIndexBegin) {
				sessionStorage.setItem('lang', '');
				location.href = location.href + 'index.html';
			}else{
				var base = location.href.substring(0, pageIndexBegin+1);
				var page = location.href.substring(pageIndexBegin+1, dotBegin);
				
				var isChinese = page.indexOf('zh-cn') > 0 ? true : false;
				var pageOrigin = '';
				if(isChinese) {
					var pageArray = page.split('_');
					pageOrigin = pageArray[0];
				}else{
					pageOrigin = page;
				}

				if(locale == 'en-us') {
					location.href = base + pageOrigin + '_zh-cn.html';
				}else{
					location.href = base + pageOrigin + '.html';
				}
			}

			//scroll to top
			$('body').scrollTop(0);
		}
	});
};

//初始化页面顶部和底部
initHeaderAndFooter();

