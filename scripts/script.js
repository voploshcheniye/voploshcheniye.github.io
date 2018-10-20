jQuery(document).ready(function($) {

	var sections = $('a')
	, nav = $('nav')
	, nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
	var cur_pos = $(this).scrollTop();

	sections.each(function() {
	var top = $(this).offset().top - nav_height,
	bottom = top + $(this).outerHeight();

	if (cur_pos >= top && cur_pos <= bottom) {
	nav.find('a').removeClass('active');
	sections.removeClass('active');

	$(this).addClass('active');
	nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	}
	});
	});

	$("img.lazy").lazyload({
    	effect : "fadeIn"
	});

	var $root = $('html, body');

	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$root.animate({
						scrollTop: target.offset().top
					}, 3000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});

})