/*
Author       : Theme_Ocean.
Template Name: Safa - Simple & Easy Creative One Page Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/*START MENU JS*/
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

			$(window).on('scroll', function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			var s = $("#sticker");
			var pos = s.position();					   
			$(window).on('scroll', function() {
				var windowpos = $(window).scrollTop();
				if (windowpos >= pos.top) {
					s.addClass("stick");
				} else {
					s.removeClass("stick");	
				}
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/ 
	
		/*START SLIDER JS*/
			$('.carousel').carousel({
				interval:8000,
				pause:'false',
			});
		/*END SLIDER JS*/

		/*START TESTIMONIAL JS*/
			$(window).on('load', function () {
				$('.testi-slider').flexslider({
					animation: 'none',
					prevText: "<i class='fa fa-long-arrow-left'></i>",
					nextText: "<i class='fa fa-long-arrow-right'></i>"
				});
			});
		/*END TESTIMONIAL JS*/		

		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 5000, //Set AutoPlay to 3 seconds
		  items : 4,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/
		
		/*START VIDEO JS*/
		 function autoPlayYouTubeModal() {
			var trigger = $("body").find('[data-toggle="modal"]');
			trigger.on("click",function() {
			  var theModal = $(this).data("target"),
				videoSRC = $('#video-modal iframe').attr('src'),
				videoSRCauto = videoSRC + "?autoplay=1";
			  $(theModal + ' iframe').attr('src', videoSRCauto);
			  $(theModal + ' button.close').on("click",function() {
				$(theModal + ' iframe').attr('src', videoSRC);
			  });
			  $('.modal').on("click",function() {
				$(theModal + ' iframe').attr('src', videoSRC);
			  });
			});
		  }
		  autoPlayYouTubeModal();
		/*END VIDEO JS*/
		
		 /*START PORTFOLIO POPUP JS*/
		  $("a[data-rel^='prettyPhoto']").prettyPhoto();				 
		  $('#projectModal').on('shown.bs.modal', function () {
			  $('#myInput').focus()
		  })
		  /*END PORTFOLIO POPUP JS*/ 
		  
		/*START GOOGLE MAP*/
		function initialize() {
		  var mapOptions = {
			zoom: 10,
			scrollwheel: false,
            center: new google.maps.LatLng(36.0967689, -80.0721779)
		  };
		  var map = new google.maps.Map(document.getElementById('map'),
			  mapOptions);
		  var marker = new google.maps.Marker({
			position: map.getCenter(),
            icon: 'BootstrapTemplate/Template_file/sonakshi/assets/img/map_pin.png',
			map: map
		  });
		}
		google.maps.event.addDomListener(window, 'load', initialize);	
		/*END GOOGLE MAP*/	
			
	}); 		
	
	/* START PARALLAX JS */
	(function () {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}
	}());
	/* END PARALLAX JS  */	

	/*START TEAM CAROUSEL JS*/
	var slider = new MasterSlider();
	slider.setup('teamslider' , {
		loop:true,
		width:240,
		height:240,
		speed:20,
		view:'focus',
		preload:'all',
		space:0,
		wheel:true
	});
	slider.control('arrows');
	slider.control('slideinfo',{insertTo:'#staff-info'});

	$('#myTab a').on(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	});
	/*END TEAM CAROUSEL JS*/
	
	
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
				
})(jQuery);


  

