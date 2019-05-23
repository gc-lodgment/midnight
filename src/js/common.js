$(function() {
    
    scrollFunc();
    
});

// 스크롤 기능
function scrollFunc() {
    $(window).on('scroll', function() {
        var scr = $(window).scrollTop();
        var gnb = $('.gnb');
            
        if ( scr == 0 ) {
            gnb.removeClass('on');
        } else {
            gnb.addClass('on');
        }

        // #setTop 여부 존재 확인
        var bnRsv = $('#rsv-mipic')
        if ( $('#setTop').length > 0 ) {
            var pd = 30,
                setTop = $('#setTop').offset().top,
                std = setTop - gnb.outerHeight(),
                bnTop = setTop  + pd ;
            
            bnRsv.show();
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
        } else {
            bnRsv.hide();
        }
    });
}