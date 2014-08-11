$(function() {
	function nav(page, reverse) {
		$.mobile.changePage('#' + page, {
			transition: 'slide',
			reverse: !!reverse
		});
	}

	$('.container').on('swipeleft', function(e) {
		var next = $(this).jqmData('next');
		if (next)
			nav(next);
	});
	
	$('.container').on('swiperight', function(e) {
		var prev = $(this).jqmData('prev');
		if (prev)
			nav(prev, true);
	});
});