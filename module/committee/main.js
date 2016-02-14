(function(win){
	var mapping = i18n_about_page[locale];
	
	//设置内容
	//Conference Co-Chairs:
	var conference_cochairs = [
	    mapping.conference_cochairs1,
	    mapping.conference_cochairs2,
	    mapping.conference_cochairs3
	];
	
	//Program Co-Chairs:
	var program_cochairs = [
		mapping.program_cochairs1,
		mapping.program_cochairs2,
		mapping.program_cochairs3
	];
	
	//Honorary Co-Chairs: 
	var honorary_cochairs = [
		mapping.honorary_cochairs1,
		mapping.honorary_cochairs2,
		mapping.honorary_cochairs3
	];
	
	//Industry Co-Chairs:
	var industry_cochairs = [
		mapping.industry_cochairs1,
		mapping.industry_cochairs2,
		mapping.industry_cochairs3,
		mapping.industry_cochairs4
	];

	//Competition Co-Chairs:
	var competition_cochairs = [
		mapping.competition_cochairs1,
		mapping.competition_cochairs2,
		mapping.competition_cochairs3
	];

	//Sponsorship Co-Chairs: 
	var sponsorship_cochairs = [
		mapping.sponsorship_cochairs1,
		mapping.sponsorship_cochairs2,
		mapping.sponsorship_cochairs3
	];

	//Collaborative Co-Chairs:
	var collaborative_cochairs = [
		mapping.collaborative_cochairs1,
		mapping.collaborative_cochairs2,
		mapping.collaborative_cochairs3,
		mapping.collaborative_cochairs4
	];
	
	//Research Camp Co-Chairs:
	var research_camp_cochairs = [
		mapping.research_camp_cochairs1,
		mapping.research_camp_cochairs2,
		mapping.research_camp_cochairs3
	];
	
	//Faculty Co-Chairs: (Pending confirmation)
	var faculty_cochairs = [
		mapping.faculty_cochairs1,
		mapping.faculty_cochairs2,
		mapping.faculty_cochairs3
	];
	
	//Student Co-Chairs:
	var student_cochairs = [
		mapping.student_cochairs1,
		mapping.student_cochairs2,
		mapping.student_cochairs3
	];
	
	//Publicity Co-Chairs: 
	var publicity_cochairs = [
		mapping.publicity_cochairs1,
		mapping.publicity_cochairs2,
		mapping.publicity_cochairs3
	];
	
	//Technology Co-Chairs: 
	var technology_cochairs = [
		mapping.technology_cochairs1,
		mapping.technology_cochairs2,
		mapping.technology_cochairs3
	];

	//Platform Co-Chairs: 
	var platform_cochairs = [
		mapping.platform_cochairs1,
		mapping.platform_cochairs2,
		mapping.platform_cochairs3
	];
	
	//Web Masters: 
	var web_masters = [
		mapping.web_masters1,
		mapping.web_masters2,
		mapping.web_masters3
	];
	
	//Advisory Committee: (Pending confirmation)
	var advisory_committee = [
		mapping.advisory_committee1,
		mapping.advisory_committee2,
		mapping.advisory_committee3,
		mapping.advisory_committee4,
		mapping.advisory_committee5,
		mapping.advisory_committee6,
		mapping.advisory_committee7,
		mapping.advisory_committee8,
		mapping.advisory_committee9,
		mapping.advisory_committee10,
		mapping.advisory_committee11,
		mapping.advisory_committee12,
		mapping.advisory_committee13,
		mapping.advisory_committee14,
		mapping.advisory_committee15,
		mapping.advisory_committee16,
		mapping.advisory_committee17,
		mapping.advisory_committee18,
		mapping.advisory_committee19,
		mapping.advisory_committee20,
		mapping.advisory_committee21,
		mapping.advisory_committee22,
		mapping.advisory_committee23,
	];

	//Program Committee (Incomplete):
	var program_committee = [
		mapping.program_committee1,
		mapping.program_committee2,
		mapping.program_committee3,
		mapping.program_committee4,
		mapping.program_committee5,
		mapping.program_committee6,
		mapping.program_committee7,
		mapping.program_committee8,
		mapping.program_committee9,
		mapping.program_committee10,
		mapping.program_committee11,
		mapping.program_committee12,
		mapping.program_committee13,
		mapping.program_committee14,
		mapping.program_committee15,
		mapping.program_committee16,
		mapping.program_committee17,
		mapping.program_committee18,
		mapping.program_committee19,
		mapping.program_committee20,
		mapping.program_committee21,
		mapping.program_committee22,
		mapping.program_committee23,
		mapping.program_committee24,
		mapping.program_committee25,
		mapping.program_committee26,
		mapping.program_committee27,
		mapping.program_committee28,
		mapping.program_committee29,
		mapping.program_committee30,
		mapping.program_committee31,
		mapping.program_committee32,
		mapping.program_committee33,
		mapping.program_committee34,
		mapping.program_committee35,
		mapping.program_committee36,
		mapping.program_committee37,
		mapping.program_committee38,
		mapping.program_committee39,
		mapping.program_committee40,
		mapping.program_committee41,
		mapping.program_committee42,
		mapping.program_committee43,
		mapping.program_committee44,
		mapping.program_committee45,
		mapping.program_committee46,
		mapping.program_committee47,
		mapping.program_committee48,
		mapping.program_committee49,
		mapping.program_committee50,
		mapping.program_committee51,
		mapping.program_committee52
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
	
	//标题
	$('.committee-view > .title').html(mapping.org_title);
	$('.committee-view #co_title').html(mapping.org_sub_title_co);
	$('.committee-view #ac_title').html(mapping.org_sub_title_ac);
	$('.committee-view #pc_title').html(mapping.org_sub_title_pc);
	
	//组委会成员
	var $co_content = $('.committee-view #co');
	$co_content.append(Group(mapping.conference_cochairs_title, conference_cochairs));
	$co_content.append(Group(mapping.program_cochairs_title, program_cochairs));
	$co_content.append(Group(mapping.honorary_cochairs_title, honorary_cochairs));
	$co_content.append(Group(mapping.industry_cochairs_title, industry_cochairs));
	$co_content.append(Group(mapping.competition_cochairs_title, competition_cochairs));
	$co_content.append(Group(mapping.sponsorship_cochairs_title, sponsorship_cochairs));
	$co_content.append(Group(mapping.collaborative_cochairs_title, collaborative_cochairs)); 
	$co_content.append(Group(mapping.research_camp_cochairs_title, research_camp_cochairs));  
	$co_content.append(Group(mapping.faculty_cochairs_title, faculty_cochairs));
	$co_content.append(Group(mapping.student_cochairs_title, student_cochairs));
	$co_content.append(Group(mapping.publicity_cochairs_title, publicity_cochairs));
	$co_content.append(Group(mapping.technology_cochairs_title, technology_cochairs));
	$co_content.append(Group(mapping.platform_cochairs_title, platform_cochairs)); 
	$co_content.append(Group(mapping.web_masters_title, web_masters));
	
	var $ac_content = $('.committee-view #ac');
	$ac_content.append(Group(mapping.advisory_committee_title, advisory_committee));
	
	var $pc_content = $('.committee-view #pc');
	$pc_content.append(Group(mapping.program_committee_title, program_committee));
	
})(window);
