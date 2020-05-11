$(function() {

	// Custom JS
	
	$("#scrollable").click(function() {
	    $([document.documentElement, document.body]).animate({
	        scrollTop: $("#scrollabledo").offset().top
	    }, 1000);
	});

	var $hamburger = $(".hamburger");
	/*$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
		// Do something else, like open/close menu
	});*/

	$('.hamburger').click(function(){
		$('.mobile').animate({
			right: 0
		}, 1000);
		$hamburger.toggleClass("is-active");
		//$(this).hide();
		$('.overlay').fadeIn();
	});
	$('.mobile span, .overlay, ul.mobile::before').click(function(){
		$('.mobile').animate({
			right: -250
		});
		//$('.hamb').show();
		$hamburger.toggleClass("is-active");
		$('.overlay').fadeOut();
	});



	
});
