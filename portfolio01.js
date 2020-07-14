// ヘッダー固定 スクロール後小さく
var _window = $(window),
    _header = $('#mainNav'),
    hbgBottom;

_window.on('scroll', function () {
    hbgfixedBottom = $('.h-bg-fixed').height();
    if (_window.scrollTop() > hbgfixedBottom - 130) {
        _header.addClass('transform');
    }
    else {
        _header.removeClass('transform');
    }
});

_window.trigger('scroll');


// Topへ戻るボタン
$(function() {
    var pagetop = $('#page-top-btn');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {  //300pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
  $('a[href^="#"]').click(function(){
    var time = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var distance = target.offset().top;
    $("html, body").animate({scrollTop:distance}, time, "swing");
    return false;
  });
});


// スムーススクロール
$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('.navbar-toggler').click();
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});


// フェードイン
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});
