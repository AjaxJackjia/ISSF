define([ 'backbone', 'util' ], function(Backbone, util) {
	var AboutView = Backbone.View.extend({
		
		className: 'about-view',
		
		initialize: function(){
			//确保在正确作用域
			_.bindAll(this, 'render');
			
			this.p1 = 'Sponsored by National Science Foundation of China, the International Summit on Smart Finance (ISSF) is to ' + 
					  'create a direct channel for industry leaders to communicate with academic leaders on how to harness big data ' + 
					  'analytics in New Finance.  ISSF is hosted jointly by the Center on Global Internet Finance and the College of ' + 
					  'Business, City University of Hong Kong.  It will be held at the City University of Hong Kong’s Shenzhen Research Institute. ';
			this.p2 = 'We define Smart Finance as research and development in the intersection of <span class="underline">business intelligence</span> ' + 
					  'including big data analytics, data sciences, data mining, and <span class="underline">new finance</span> including P2P lending, ' + 
					  'crowdfunding, supply chain finance, and e-payment systems.  ISSF is to provide a platform for in-depth exchange of ideas between ' +  
					  'industry leaders, academic leaders, and government officials on how to harness Smart Finance.';
			this.p3 = 'To bring the conference to the Internet+ age, ISSF will experiment an innovative conferencing format called ' + 
					  '<span class="bold">Multi-locale O2O Meeting</span> (or simply <span class="bold">MOM</span>).  The multiple ' + 
					  'locales include <span class="bold italic">Shenzhen</span> (the City University of Hong Kong’s Shenzhen Research Institute), ' + 
					  '<span class="bold italic">Beijing</span> (Central University of Economics and Finance), and <span class="bold italic">Shanghai</span> ' + 
					  '(Shanghai Jiao Tong University), among other possible locales.  The offline and online components include a two-day ' + 
					  'face-to-face conferencing and online meetings before, during, and after the face-to-face conferencing.  The online ' + 
					  'activities include synchronous or asynchronous exchange of information in the form of keynote speeches, panel discussions, ' + 
					  'and other presentations. ';
			this.p4 = 'ISSF sets its goals on promoting industrial best practices and government regulations in relevant business areas as ' + 
					  'well as on facilitating academic studies on industrial standards, theoretical advances, and educational frameworks.  ' + 
					  'The summit will include typical conference components such as keynotes, planetary speeches, panels, and paper presentations ' + 
					  'that are either invited or submitted from researchers in universities and other institutions. Areas of research will include ' + 
					  'big data finance, internet finance, and financial intelligence.  <span class="bold">More specific topics will be given in the call-for-participation.</span>';
			this.p5 = 'In the online components of the summit, we will offer a few <span class="bold">theme-based social platforms</span> for (1) <span class="bold">faculty</span> to match and ' + 
					  'interact with potential research students, (2) <span class="bold">companies</span> to match and interact with researchers on collaboration opportunities, ' + 
					  '(3) <span class="bold">schools or departments</span> in universities to match and interact with counterparts for globalization activities, ' + 
					  '(4) <span class="bold">students</span> to match and interact with other students to form groups on discovery and innovation that will lead to ' +
					  'projects potentially fundable by companies.  ISSF will experiment with these platforms as social experiments in <span class="italic">Smart Finance</span>. ';
			this.p6 = 'The summit program will be created based partially on the outcomes of various interactions in these platforms.  ' + 
					  'For instance, <span class="bold">panel sessions could be created on hot and potentially controversial issues ' + 
					  'surfaced in various social interactions.</span> ';
		},
		
		render: function(){
			var tpl = 
				'<h1>International Summit on Smart Finance</h1>' + 
				'<div class="meta">' + 
				'	<div class="time">May 20-21, 2016</div>' + 
				'	<div class="institute">Center on Global Internet Finance at the City University of Hong Kong</div>' + 
				'	<div class="location">Shenzhen Research Institute, Shenzhen, China</div>' + 
				'</div>' + 
				'<p>' + this.p1 + '</p>' + 
				'<p>' + this.p2 + '</p>' + 
				'<p>' + this.p3 + '</p>' + 
				'<p>' + this.p4 + '</p>' + 
				'<p>' + this.p5 + '</p>' + 
				'<p>' + this.p6 + '</p>' + 
				'<div class="important-dates">' + 
				'	<h3>Important Dates:</h3>' + 
				'	<ul class="dates">' + 
				'		<li class="item">Theme-Based Social Platforms Open: February 15, 2016</li>' + 
				'		<li class="item">Position Papers due: February 15, 2016 (3-5 pages in the 2-column IEEE format)</li>' + 
				'		<li class="item">Acceptance Notice: February 30, 2016</li>' + 
				'		<li class="item">Camera Ready Paper due: March 15, 2016</li>' + 
				'		<li class="item">Program Announcement Online: March 25, 2016</li>' + 
				'	</ul>' + 
				'</div>';
			$(this.el).append(tpl);
			
			return this;
		}
	});
	
	return AboutView;
});

