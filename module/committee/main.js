(function(win){
	//设置语言
	var locale = sessionStorage.getItem('lang') || 'en-us';
	var mapping = i18n_about_page[locale];
	
	//设置内容
	//Conference Co-Chairs:
	var conference_cochairs = [
	    'Chen, Guoqing, Tsinghua University, China',
	    'Goes, Paulo, University of Arizona, USA',
	    'Zhao, J. Leon, City University of Hong Kong'
	];
	
	//Program Co-Chairs:
	var program_cochairs = [
	    'Lau, Raymond, City University of Hong Kong',
	    'Ye, Qiang, Harbin Institute of Technology, China',
	    'Zhang, Dongsong, University of Maryland Baltimore County, USA'
	];
	
	//Honorary Co-Chairs: (Pending confirmation)
	var honorary_cochairs = [
		    'Ramayya Krishnan, Carnegie Mellon University, USA',
	    'Houmin Yan, City University of Hong Kong',
	    'Jia He, South University of Science and Technology, Shenzhen, China'
	];
	
	//Advisory Committee: (Pending confirmation)
	var advisory_committee = [
		'Basu, Amit, South Methodist University, USA',
		'Chaturvedi, Alok, Purdue University, USA',
		'Chau, Patrick, University of Hong Kong',
		'Chen, Hsinchun, University of Arizona. USA ',
		'Dennis, Allan, University of Indiana, USA ',
		'Gang, Kou, Southwest University of Finance and Economics, China ',
		'Goul, Michael, Arizona State University, USA',
		'Gupta, Alok, University of Minnesota, USA',
		'Kauffmann, Rob, Singapore Management University ',
		'Leung, Michael, China CITIC Bank International Limited, Hong Kong ',
		'Liang, T. P., National Sun Yat-sen University, Kaohsiung, Taiwan',
		'Mao, Jiye, Renmin University, Beijing, China',
		'Miller, Steve, Singapore Management University',
		'Rai, Arun, Georgia State University, USA',
		'Ramesh, Ram, University at Buffalo, USA',
		'Tam, Kar Yan, Hong Kong University of Science and Technology',
		'Wang, Huaiqing, South University of Science and Technology, Shenzhen, China',
		'Wang, Xia, Tsinghua University, China',
		'Wei, K.K., City University of Hong Kong',
		'Westland, Chris, University of Illinois at Chicago, USA ',
		'Xie, Kang, Sun Yat-sen University, Guangzhou, China',
		'Zeng, Daniel, University of Arizona. USA'
	];
	
	//Industry Co-Chairs: (Pending confirmation)
	var industry_cochairs = [
		'Cheng, Hsing Kenny, University of Florida, USA',
	    'Lin, Zhangxi, Texas Tech University, USA',
	    'Wang, Harry. Delaware University, USA',
	    'Wen, Zheyi, Rongyou Fortune, Beijing, China'
	];
	
	//Collaborative Co-Chairs: (Pending confirmation)
	var collaborative_cochairs = [
		'Santanam, Raghu, Arizona State University, USA',
	    'Zhang, Han, Georgia Institute of Technology, USA',
	    'Zhang, Pengzhu, Shanghai Jiao Tong University, China',
	    'Zhu, Jianming, Central University of Finance and Economics, Beijing, China'
	];
	
	//Research Camp Co-Chairs: (Pending confirmation)
	var research_camp_cochairs = [
		'Baesens, Bart, KU Leuven, Belgium ',
	    'Bapna, Ravi, University of Minnesota, USA',
	    'Sang-Pil Han, Arizona State University, USA'
	];
	
	//Faculty Co-Chairs: (Pending confirmation)
	var faculty_cochairs = [
		'Chiang, Roger, University of Cincinnati, USA',
	    'Fan, Ming, University of Washington, USA',
	    'Yue, Wei Thoo, City University of Hong Kong'
	];
	
	//Student Co-Chairs: (Pending confirmation)
	var student_cochairs = [
		'Lin, Mingfeng, University of Arizona, USA',
	    'Shan, Jay, University of Cincinnati, USA',
	    'Wang, Chong Alex, City University of Hong Kong'
	];
	
	//Publicity Co-Chairs: (Pending confirmation)
	var publicity_cochairs = [
		'Lang, Karl, City University of New York, USA',
	    'Li, Qing, City University of Hong Kong',
	    'Guo, Xunhua, Tsinghua University, China'
	];
	
	//Technology Co-Chairs: (Pending confirmation)
	var technology_cochairs = [
		'Chen, Hailiang, City University of Hong Kong',
	    'Li, Xin, City University of Hong Kong',
	    'Liu, Ying, California State University, Long Beach, USA'
	];

	//Platform Co-Chairs: (Pending confirmation)
	var platform_cochairs = [
		'Fan, Shaokun, West Texas A&M University, USA',
	    'Kang, Lele, Nanjing University, China',
	    'Zhao, J. Leon, City University of Hong Kong'
	];
	
	//Web Masters: 
	var web_masters = [
		'Bian, Yiyang, City University of Hong Kong',
	    'Ilk, Noyan, Florida State University, USA',
	    'Jia, Guochao, Nanjing University, China'
	];
	
	//Program Committee (Incomplete):
	var program_committee = [
		'Abbasi, Ahmed, University of Virginia, USA',
		'Chau, Michael, University of Hong Kong',
		'Chen, Hailiang, City University of Hong Kong',
		'Deokar, Amit, Penn State University, USA',
		'Dou, Wanchun, Nanjing University, China',
		'Fan, Ming, University of Washington, USA',
		'Fang, Xiao, University of Delaware, USA',
		'Guo, Xunhua, Tsinghua University, China',
		'Hu, Daning, University of Zurich, Switzerland ',
		'Huang, Liqiang, Zhejiang University, China',
		'Ilk, Noyan, Florida State University, USA',
		'Kang, Lele, Nanjing University, China',
		'Lang, Karl, City University of New York, USA',
		'Li, Qing, City University of Hong Kong',
		'Li, Xin, City University of Hong Kong',
		'Liang, Huigang, East Carolina University, USA',
		'Lin, Lihui, Tsinghua University, China ',
		'Lin, Mingfeng, University of Arizona, USA',
		'Liu, Manlu, Rochester Institute of Technology, USA',
		'Liu, Ying, California State University, Long Beach, USA',
		'Fan, Shaokun, West Texas A&M University, USA',
		'Sarnikar, Surendra, South Dakota University, USA ',
		'Shan, Jay, University of Cincinnati, USA',
		'Sun, Heshan, Clemson University, USA',
		'Wang, Alan, Virginia Polytechnic Institute and State University, USA ',
		'Wang, Chong Alex, City University of Hong Kong',
		'Wang, Xiang, Nanjing University, China',
		'Wang, Yonggui, GTA Corporation, China',
		'Wei, Qiang, Tsinghua University, China',
		'Wong, Michael, City University of Hong Kong',
		'Wu, D.J., Georgia Institute of Technology, USA',
		'Wu, Ji, Sun Yat-sen University, Guangzhou, China',
		'Xitong Li, HEC Paris, France',
		'Xu, Dongming, University of Queensland, Australia',
		'Xu, Jennifer, Bentley University, USA',
		'Xu, Kaiquan, Nanjing University, China',
		'Xu, Lizhen, Georgia Institute of Technology, USA',
		'Yang, S. Alex, London School of Business, UK ',
		'Yue, Wei Thoo, City University of Hong Kong',
		'Zhang, Bin, University of Arizona, USA ',
		'Zhang, Han, Georgia Institute of Technology, USA',
		'Zhao, Kang, University of Iowa, USA',
		'Zhao, Min, University of Wisconsin-Milwaukee, USA',
		'Zhu, Qinghua, Nanjing University, China'
	];
	
	var Group = function(title, persons) {
		var person_tpl = '';
		for(var index = 0;index<persons.length;index++) {
			person_tpl += '<div class="person">' + persons[index] + '</div>';
		}
		
		var tpl = '<div class="group">' + 
			      '		<div class="title">' + title + '</div>' + person_tpl +  
			      '</div>';
		
		return tpl;
	}
	
	var $committeeView = $('.committee-view');
	$committeeView.append('<h1>Conference Organization</h1>');
	$committeeView.append(Group('Conference Co-Chairs:', conference_cochairs));
	$committeeView.append(Group('Program Co-Chairs:', program_cochairs));
	$committeeView.append(Group('Honorary Co-Chairs: (Pending confirmation)', honorary_cochairs));
	$committeeView.append(Group('Advisory Committee: (Pending confirmation)', advisory_committee));
	$committeeView.append(Group('Industry Co-Chairs: (Pending confirmation)', industry_cochairs));
	$committeeView.append(Group('Collaborative Co-Chairs: (Pending confirmation)', collaborative_cochairs)); 
	$committeeView.append(Group('Research Camp Co-Chairs: (Pending confirmation)', research_camp_cochairs));  
	$committeeView.append(Group('Faculty Co-Chairs: (Pending confirmation)', faculty_cochairs));
	$committeeView.append(Group('Student Co-Chairs: (Pending confirmation)', student_cochairs));
	$committeeView.append(Group('Publicity Co-Chairs: (Pending confirmation)', publicity_cochairs));
	$committeeView.append(Group('Technology Co-Chairs: (Pending confirmation)', technology_cochairs));
	$committeeView.append(Group('Platform Co-Chairs: (Pending confirmation)', platform_cochairs)); 
	$committeeView.append(Group('Web Masters:', web_masters));
	$committeeView.append(Group('Program Committee: (Incomplete)', program_committee));
	
	//初始化页面顶部和底部
	initHeaderAndFooter();
})(window);
