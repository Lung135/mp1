

//https://css-tricks.com/snippets/jquery/smooth-scrolling/

//navbar resize and position indicator that refreshes on a scroll event
$(document).ready(function() {
	$(window).on('scroll', function(e) {
		var currPos = $(document).scrollTop();
		if(currPos > 120) {
			$('.navbar').css('height', '40px');
			$('#navbar-links').css('margin-top', '10px');
		}
		else {
			$('.navbar').css('height', '80px');
			$('#navbar-links').css('margin-top', '30px');
		}

		var vid = $('#movie').offset().top; //movie is variable height
		var work = $('#work').offset().top;
		var white = '#fff'
		var highlight = '#00ccff';
		console.log("vid"+vid);
		console.log("work"+work);
		console.log("curr"+currPos);
		if(currPos < 689) {
			$('#navbar-links a[href="#hello"]').css('color', highlight);
			$('#navbar-links :not(a[href="#hello"])').css('color', white);
		}
		else if(currPos < 1089) {
			$('#navbar-links a[href="#about"]').css('color', highlight);
			$('#navbar-links :not(a[href="#about"])').css('color', white);
		}
		else if(currPos < 1589) {
			$('#navbar-links a[href="#photos"]').css('color', highlight);
			$('#navbar-links :not(a[href="#photos"])').css('color', white);
		}
		else if(currPos < work-39) {
			$('#navbar-links a[href="#movie"]').css('color', highlight);
			$('#navbar-links :not(a[href="#movie"])').css('color', white);
		}
		else {
			$('#navbar-links a[href="#work"]').css('color', highlight);
			$('#navbar-links :not(a[href="#work"])').css('color', white);
		}

		//check if at bottom http://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom
		if(currPos + $(window).height() >= $(document).height()) {
			$('#navbar-links a[href="#work"]').css('color', highlight);
			$('#navbar-links :not(a[href="#work"])').css('color', white);
		}
	});

	//modal
	$('#footer').click(function() {
		var windowH = $(window).height();
		var windowW = $(window).width();
		$('#modal').css('top', (.5*windowH - 150)+"px");
		$('#modal').css('left', (.5*windowW - 250)+"px");
		$('#modal').css('display', 'block');
	});

	$('#exit').click(function() {
		$('#modal').css('display', 'none');
	});



	//Smooth Scrolling
	$(function() {
		$('#navbar-links a').click(function() {
			var target = $(this.hash);
			console.log(target);
			// if(($(this.hash)).length && $(this.hash) == "#hello") {
			// 	$("html, body").animate({scrollTop: $(this.hash).offset().top}, 1000);
			// 	return false;
			// }
			if(($(this.hash)).length) {
				$("html, body").animate({scrollTop: $(this.hash).offset().top - 40}, 1000);
				return false;
			}
		});
	});

	//carousel

	$(function() {
		var slide = 0;
		var numSlides = 4;

		$('#left-btn').click(function(e) {
			e.preventDefault();
			slide = (slide+1)%numSlides;

			$(carousel).animate({left:slide * $(window).width() * -1}, 1000, 'swing');
		});

		$('#right-btn').click(function(e) {
			e.preventDefault();
			slide = (slide-1)%numSlides;

			$(carousel).animate({left:slide * $(window).width()}, 1000, 'swing');
		});
	});

});


//modal
// $(document).ready(function() {
// 	$('#footer').click(function() {
// 		$('#overlay').css('display', 'inline');
// 		$('#modal').css('display', 'inline');
// 	});

// 	$('#exit').click(function() {
// 		$('#overlay').css('display', 'hide');
// 		$('#modal').css('display', 'hide');
// 	});
// });







