$(function() {
	
	sliderFn();

});

function sliderFn() {
	var slider = $(".slider-container .slider");
	slider.bxSlider({
//		mode: 'vertical',
		mode: 'fade',
		auto: true,
		autoControls: true,
		speed: 800,
		duration: 5000,
		// onSliderLoad: function(currentIndex){
		// 	slider.children().addClass("active");
		// 	slider.children().eq(currentIndex + 1).removeClass("active");
		// },
		// onSlideAfter: function ($slideElement, oldIndex, newIndex) {
		// 	slider.children().removeClass("active");
		// 	$slideElement.addClass("active");
		// }
	});
	
}