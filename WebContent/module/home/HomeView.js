define([ 'backbone', 'util' ], function(Backbone, util) {
	var HomeView = Backbone.View.extend({
		
		className: 'home-view',
		
		initialize: function(){
			//确保在正确作用域
			_.bindAll(this, 'render', 'carousel_template');
			
			//carousel data
//			this.carousel_data = [
//				{
//					title: 'International Summit on Smart Finance 2016',
//					content: 'May 20-21, 2016 <br/> Shenzhen, China',
//					img: {
//						url: 'res/images/carousel-sz-view.jpg',
//						alt: 'First slide' 
//					}
//				},
//				{
//					title: 'International Summit on Smart Finance 2016',
//					content: 'May 20-21, 2016 <br/> Shenzhen, China',
//					img: {
//						url: 'res/images/carousel-ecommerce.jpg',
//						alt: 'First slide' 
//					}
//				},
//				{
//					title: 'International Summit on Smart Finance 2016',
//					content: 'May 20-21, 2016 <br/> Shenzhen, China',
//					img: {
//						url: 'res/images/carousel-internet-finance.jpg',
//						alt: 'First slide' 
//					}
//				}
//			];
			this.carousel_data = [
				{
					img: {
						url: 'res/images/1_opt.jpg',
						alt: 'The 1st slide' 
					}
				},
				{
					img: {
						url: 'res/images/2_opt.jpg',
						alt: 'The 2nd slide' 
					}
				},
				{
					img: {
						url: 'res/images/3_opt.jpg',
						alt: 'The 3rd slide' 
					}
				},
				{
					img: {
						url: 'res/images/4_opt.jpg',
						alt: 'The 4th slide' 
					}
				},
				{
					img: {
						url: 'res/images/5_opt.jpg',
						alt: 'The 5th slide' 
					}
				},
				{
					img: {
						url: 'res/images/6_opt.jpg',
						alt: 'The 6th slide' 
					}
				},
				{
					img: {
						url: 'res/images/7_opt.jpg',
						alt: 'The 7th slide' 
					}
				}
			];
			
			//sponsors
			this.sponsor_data = [
				{
					url: 'http://epic.is.cityu.edu.hk/sigbps/',
					logo: 'res/images/sponsors/sigbps.jpg',
					alt: 'sigbps'
				},
				{
					url: 'http://www.cityu.edu.hk/',
					logo: 'res/images/sponsors/logo_cityu_home.png',
					alt: 'cityu'
				},
				{
					url: 'http://www.cies.org.cn/',
					logo: 'res/images/sponsors/infoeco_logo.gif',
					alt: 'cies'
				},
				{
					url: 'http://www.szqianjing.com/yanjiu.aspx',
					logo: 'res/images/sponsors/qianjing_logo.jpg',
					alt: 'szqianjing'
				},
				{
					url: '#',
					logo: 'res/images/sponsors/zhigao.jpg',
					alt: 'zhigao'
				}
			];
		},
		
		render: function(){
			//Part #1: slides
			$(this.el).append(_.template(this.carousel_template())({carousel_data: this.carousel_data}));
			
			//Part #2: short abstract
			$(this.el).append(_.template(this.basicInfo_template()));
			
			//Part #3: partner
			$(this.el).append(_.template(this.sponsor_template())({sponsor_data: this.sponsor_data}));
			
			//调整carousel自适应高度
			var self = this;
			self.resizeCarousel();
			$( window ).resize(function() {
				self.resizeCarousel();
			});
			
			return this;
		},
		
		resizeCarousel: function() {
			var carouselHeight = $( window ).height() - 70;
			$(this.el).find('.carousel-inner').css('height', carouselHeight + 'px');
		},
		
		carousel_template: function() {
			return '<div id="portal_carousel" class="row carousel slide"> ' + 
					'	<!-- 轮播（Carousel）指标 --> ' + 
					'	<ol class="carousel-indicators">  ' + 
					'		<%_.each(carousel_data, function(item, index) {%> ' + 
					'			<li data-target="#portal_carousel" data-slide-to="<%= index %>" class="<%- index==0?"active":"" %>" ></li> ' + 
					'		<%});%> ' + 
					'	</ol> ' + 
					'	<!-- 轮播（Carousel）项目 --> ' + 
					'	<div class="carousel-inner"> ' + 
					'		<%_.each(carousel_data, function(item, index) {%> ' + 
					'			<div class="item <%- index==0?"active":"" %>"> ' + 
					'				<div class="carousel-fg"> ' + 
					'					<div class="carousel-title"><%=item.title%></div> ' + 
					'					<div class="carousel-content"><%=item.content%></div> ' + 
					'				</div> ' + 
					'				<img src="<%=item.img.url%>" alt="<%=item.img.alt%>"> ' + 
					'			</div> ' + 
					'		<%});%> ' + 
					'	</div> ' + 
					'	<!-- 轮播（Carousel）导航 --> ' + 
					'	<a class="carousel-control left" href="#portal_carousel" data-slide="prev">&lsaquo;</a> ' + 
					'	<a class="carousel-control right" href="#portal_carousel" data-slide="next">&rsaquo;</a> ' + 
					'</div> ';
		},
		
		basicInfo_template: function() {
			return '<div class="abstract">' + 
				   '	<div class="container padded text-center">' + 
				   '		<h1>International Summit on Smart Finance</h1>' + 
				   '		<h3>Center on Global Internet Finance at the City University of Hong Kong</h3>' +
				   '		<h3>Shenzhen Research Institute, Shenzhen, China</h3>' +
				   '		<a href="about.html" class="btn btn-transparent btn-huge" id="try-now-btn">Read More >></a>' + 
				   '	</div>' + 
				   '</div>';
		},
		
		sponsor_template: function() {
			return  '<div class="sponsors">' + 
					'	<div class="container padded text-center">' + 
					'	<h1>Sponsors</h1>' + 
					'	<div class="brands">' + 
					'		<%_.each(sponsor_data, function(item) {%> ' + 
					'			<div class="brand"> ' + 
					'				<a href="<%=item.url%>" target="_blank">' + 
					'					<img src="<%=item.logo%>" alt="<%=item.alt%>"> ' + 
					'				</a>' + 
					'			</div> ' + 
					'		<%});%> ' + 
					'	</div>' + 
					'</div>';
		}
	});
	
	return HomeView;
});