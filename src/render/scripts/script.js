jQuery(document).ready(function($) {

	$('.feature').ripples({
		resolution: 100,
		dropRadius: 150,
		perturbance: 0.005,
	});

	/*var $root = $('html, body');

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
					}, 1000, function() {
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

	var vheight = $(window).height();
	var vwidth = $(window).width();

	$(document).scrollLeft(vwidth);

	$( window ).resize(function() {
  		var vheight = $(window).height();
		var vwidth = $(window).width();
	});

	// The scroll-up function
	function scrollUp() {
		$root.animate({
			scrollTop: (Math.ceil($(window).scrollTop() / vheight) - 1) * vheight
		}, 1000);

	};
	// The scroll-down function
	function scrollDown() {
		$root.animate({
			scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight + 1
		}, 1000);
	};

	function scrollR() {
		$root.animate({
			scrollLeft: (Math.floor($(window).scrollLeft() / vwidth) + 1) * vwidth
		}, 1000);
	};

	function scrollL() {
		$root.animate({
			scrollLeft: (Math.ceil($(window).scrollLeft() / vwidth) - 1) * vwidth
		}, 1000);
	};

	// Key Events
	$(document).keydown(function(e) {
		e.preventDefault;
		if (e.keyCode == 87) {
			scrollUp();
		};
		if (e.keyCode == 83) {
			scrollDown();
		};
		//if (e.keyCode == 65) { scrollUp(); }; A Key
		if (e.keyCode == 68) { 
			scrollR();
		};
		if (e.keyCode == 65) { 
			scrollL();
		};
	});

	var speech = new Array(
		"You're not about to get out.",
		"<I>Talking with you backstage</i>",
		"Patterns don't collapse in; they collapse out.",
		"<i>Make space out of time</i>",
		"Visit the other island.",
		"<i>Can't tell if you're underwater anymore.<i>"
	);

	var empty = true;
	var interval = 20000;

	function doSomething() {}

		(function loop() {
			var rand = Math.round(Math.random() * (3000 - 500)) + interval;
				setTimeout(function() {
				doSomething();
			loop();  
		}, rand);
		if(empty) {
			$('#chat-text').html(speech[getRandomIntInclusive(0, speech.length -1)]);
			empty = false;
		} else {
			$('#chat-text').html('');
			empty = true;
		}
		interval = interval * 0.9;

	}());

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	doSomething();

	$('#chat-text').html(speech[getRandomIntInclusive(0, speech.length -1)]);

	$(".modal-dialog").draggable({
		handle: ".modal-content"
	});*/

})