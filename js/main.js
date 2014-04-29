$(document).ready(function() {
 
		  $("#owl-demo").owlCarousel({
		 
			  autoPlay: 3000, //Set AutoPlay to 3 seconds
		 
			  items : 6,
			  itemsDesktop : [1199,3],
			  itemsDesktopSmall : [979,3]
		 
		  });
		  // Page Scroll to Specipic ID
		  
		  $(".portfolio_menu").click(function(){
			$("html, body").delay(2000).animate({scrollTop: $('#title1').offset().top }, 2000);
		  });
		  
		   //Back To Top
		 var offset = 220;
				var duration = 500;
				jQuery(window).scroll(function() {
					if (jQuery(this).scrollTop() > offset) {
						jQuery('.back-to-top').fadeIn(duration);
					} else {
						jQuery('.back-to-top').fadeOut(duration);
					}
				});
				
				jQuery('.back-to-top').click(function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
				})
				//Portfolio
				var $container = $('.portfolio');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		}
	});

	$('nav.primary ul a').click(function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
	  return false;
	});

	var $optionSets = $('nav.primary ul'),
	       $optionLinks = $optionSets.find('a');
	 
	       $optionLinks.click(function(){
	          var $this = $(this);
		  // don't proceed if already selected
		  if ( $this.hasClass('selected') ) {
		      return false;
		  }
	   var $optionSet = $this.parents('nav.primary ul');
	   $optionSet.find('.selected').removeClass('selected');
	   $this.addClass('selected'); 
	});
	jQuery('a[data-gal]').each(function() {
	    jQuery(this).attr('rel', jQuery(this).data('gal'));
	});  	
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	
// navigation click actions
$('.scroll-link').on('click', function(event){
event.preventDefault();
var sectionID = $(this).attr("data-id");
scrollToID('#' + sectionID, 750);
});
// scroll to top action
$('.scroll-top').on('click', function(event) {
event.preventDefault();
$('html, body').animate({scrollTop:0}, 'slow');
});
// mobile nav toggle
$('#nav-toggle').on('click', function (event) {
event.preventDefault();
$('#main-nav').toggleClass("open");
});

// scroll function
function scrollToID(id, speed){
var offSet = 50;
var targetOffset = $(id).offset().top - offSet;
var mainNav = $('#main-nav');
$('html,body').animate({scrollTop:targetOffset}, speed);
if (mainNav.hasClass("open")) {
mainNav.css("height", "1px").removeClass("in").addClass("collapse");
mainNav.removeClass("open");
}
}
if (typeof console === "undefined") {
console = {
log: function() { }
};
}
		
		
		});
