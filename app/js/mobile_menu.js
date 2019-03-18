$(document).ready(function () {
	$('.menu_top_small__humburger').click(function () {
		$('.menu_top_small__dropdown').slideToggle();
	});

	//Menu Small Close
	$('.menu_top_small__dropdown ul a').click(function () {
		$('.menu_top_small__dropdown').slideUp();
		$('.hamburger').removeClass('is-active');
	});

	//Menu Cross
	$('.menu_top_small__humburger').click(function () {
		$('.hamburger').toggleClass('is-active');
	});
});