$(document).ready(function () {
	var pos = $('.menu_scroll').offset().top;
	var wh = $(window).width();

	if (pos >= 50 && wh > 768) {
		$('.menu_scroll').addClass('menu_scroll__background');

	}
	if (pos >= 100) {
		$('.scroll_top').css('opacity', '1');
	}


	$(document).scroll(function () {
		var y = $(this).scrollTop();
		var wh = $(window).width();
		if (y > 50 && wh > 768) {
			$('.menu_scroll').addClass('menu_scroll__background');
		} else {
			$('.menu_scroll').removeClass('menu_scroll__background');

		}
	});
});