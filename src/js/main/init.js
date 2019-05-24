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
		onSliderLoad: function(){
			scrollFuncBn();
		}
		// onSlideAfter: function ($slideElement, oldIndex, newIndex) {
		// 	slider.children().removeClass("active");
		// 	$slideElement.addClass("active");
		// }
	});
	
}

// 스크롤 기능
function scrollFuncBn() {
    var bnRsv = $('#rsv-mipic'),
        gnb = $('.gnb'),
        pd = 30,
        setTop_aft, std, bnTop ;

    // 기본 bn 높이 설정
    if ( $('#setTopAft').length > 0 ) {
		setTop_aft = $('#setTopAft').offset().top;
        std = setTop_aft - gnb.outerHeight();
		bnTop = setTop_aft  + pd ;
		
		console.log(setTop_aft);
        console.log(bnTop);
        bnRsv.show();
        bnRsv.css({
            'top': bnTop
        });
    }
    $(window).on('scroll', function() {
        var scr = $(window).scrollTop();
            
		if ( scr >= std) {
			bnRsv.css({
				'top': (scr + gnb.outerHeight() + pd)
			});
		} 
		if ( scr < std ) {
			bnRsv.css({
				'top': bnTop
			});
		}
    });
}