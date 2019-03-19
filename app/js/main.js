// START Video PLYER
$(document).ready(function () {
	$('.content_video__player video').mediaelementplayer({
		pauseOtherPlayers: true,
		stretching: 'none',
		features: ['playpause', 'fullscreen']
	});
});
// END Video PLYER