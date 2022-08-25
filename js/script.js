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

// Slider
let offset = 0; // left offset
const sliderLine = document.querySelector('.card__slider');
showSlide()

function offsetRight() {
	offset += 160;
	if (offset > 480) offset = 0;
	sliderLine.style.left = -offset + 'px';
}

document.querySelector('.card__btnRight').addEventListener('click', offsetRight);

document.querySelector('.card__btnLeft').addEventListener('click', function () {
	offset -= 160;
	if (offset < 0) { offset = 480; }
	sliderLine.style.left = -offset + 'px';
});

function showSlide() {
	for (let i = 0; i < 3; i += 1) {
		offsetRight()
	}
}