$(function () {
	// button-toggle card-info
	$('.game-info').slideToggle()
	$('.btn-toggle').click(function () {
		$('.game-info').slideToggle(700);
		// active menu
		$('#start-icon').css({ 'stroke': 'white' })
		$('#start-link').css({ 'color': 'white' })
	});
	// toggle menu on click
	$('.nav__group a').click(function () {
		$('.nav__group a').css({ 'color': '#8D91A3' })
		$('.nav__group a svg').css({ 'stroke': '#8D91A3' })
		$(this).find('.nav__icon').css({ 'stroke': 'white' })
		$(this).css({ 'color': 'white' })
	})
});