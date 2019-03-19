$(document).ready(function () {

	$(document).scroll(function () {
		var y = $(this).scrollTop();

		if (y > 200) {
			$('.scroll_top').css('opacity', '1');
		} else {
			$('.scroll_top').css('opacity', '0');

		}

	});
});