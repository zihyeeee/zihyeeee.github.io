let page2Move = true; 
$(document).ready(function() {

    // gnb 동그라미 애니메이션
    $('.bar_wrap li:nth-child(1) span').animate({
        'opacity': '0.6',
        'margin-top': '0'
    }, 800)
    $('.bar_wrap li:nth-child(2) span').animate({
        'opacity': '0.6',
        'margin-top': '0'
    }, 1000)
    $('.bar_wrap li:nth-child(3) span').animate({
        'opacity': '0.6',
        'margin-top': '0'
    }, 1200)
    $('.bar_wrap li:nth-child(4) span').animate({
        'opacity': '0.6',
        'margin-top': '0'
    }, 1600)
    $('.bar_wrap li:nth-child(5) span').animate({
        'opacity': '0.6',
        'margin-top': '0'
    }, 1800)

    //scroll 이벤트
    $(window).scroll(function() {
        let win_top = $(window).scrollTop();
        let section2_top = $('.section2').offset().top;
        let section3_top = $('.section3').offset().top;
        let section4_top = $('.section4').offset().top;
    
        // top bar
        if(win_top >= 10){
            $('.tit_wrap').css({
                'position': 'fixed',
                'top': '0',
                'left': '0'
            }, 1000);
        } else {
            $('.tit_wrap').css({
                'position': 'relative',
                'top': '0',
                'left': '0'
            });
        }

        // 메인 타이틀 컬러 변경
        if(win_top >= 1800 && win_top < 2700){
            $('.main_tit').css('color','#fff');
            $('.tab_name').css('color','#fff');
            $('a.lnb_wrap div').css('background-color','#fff');
            $('.lnb_wrap img').attr('src','./image/user2.png')
        } else {
            $('.main_tit').css('color','#000');
            $('.tab_name').css('color','#000');
            $('a.lnb_wrap div').css('background-color','#000');
            $('.lnb_wrap img').attr('src','./image/user.png')
        }

        // page2
        if(win_top >= section2_top-200 && page2Move){
            $('.page2_img1').stop(true, true).animate({
                'left': '3%',
                'opacity':'1',
            }, 800);

            $('.section2 .page_wrap').stop(true, true).animate({
                'top': '7.4%',
                'opacity':'1',
            }, 1200);

            $('.section2 .contents_1').stop(true, true).animate({
                'top': '44%',
                'opacity':'1'
            }, 1600);
            $('.section2 .contents_2').stop(true, true).animate({
                'top': '49%',
                'opacity':'1'
            }, 2000);
            $('.section2 .contents_3').stop(true, true).animate({
                'top': '56%',
                'opacity':'1'
            }, 2400);
            page2Move = false;
        }

        // page4
        if(win_top >= section4_top-180){
            $('.contents_2 a').addClass('on');
            $('.contents_1 > div').addClass('on');
        }

        // section vid
        if(win_top >= section3_top-150 && !$('.vid video').attr('src')){
            $('.vid video').attr('src','./image/hackers_vote_pj.mp4')
        }
    });

    $('.bar_wrap li').mouseenter(function(){
        $(this).find('.tab_name').fadeIn();
    })
    $('.bar_wrap li').mouseleave(function(){
        $(this).find('.tab_name').fadeOut();
    })

    // mouse 이벤트
    // $('.section1 .contents_1').mouseenter(function(){
    //     $(this).animate({left:'0'}, 1000);
    // })
    // $('.section1 .contents_1').mouseleave(function(){
    //     $(this).animate({left:'-22.4%'},1000);
    // })
    // $('.section1 .contents_2').mouseenter(function(){
    //     $(this).animate({right:'0'}, 1000);
    // })
    // $('.section1 .contents_2').mouseleave(function(){
    //     $(this).animate({right:'-22.4%'},1000);
    // })
    
    var _ticker = $('.sd_box.ticker ul').bxSlider(
        {speed: 26000, maxSlides:8, slideMargin:0, ticker:true, tickerHover:false, slideWidth: 300}
    );
});

function lazy_move(obj){
    var $target = $(obj);

    $('html, body').animate(
        {
            scrollTop: $target.offset().top
        }, {
            duration: 1000,
            step: function (now, fx) {
                var newOffset = $target.offset().top;

                if (fx.end !== newOffset)
                    fx.end = newOffset;
            }
        }
    );
}

window.onload=function(){
    // page1
        $('.img_wrap .subImg:nth-child(1)').animate({
            'top': '20%',
            'opacity':'1',
        }, 1000);

        $('.img_wrap .subImg:nth-child(2)').animate({
            'top': '20%',
            'opacity':'1',
        }, 1100);

        $('.img_wrap .subImg:nth-child(3)').animate({
            'top': '50%',
            'opacity':'1'
        }, 1400);
        $('.img_wrap .subImg:nth-child(4)').animate({
            'top': '50%',
            'opacity':'1'
        }, 2200);
        $('.img_wrap .subImg:nth-child(5)').animate({
            'top': '50%',
            'opacity':'1'
        }, 2600);
}
