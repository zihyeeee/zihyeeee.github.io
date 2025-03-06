$(document).ready(function() {
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
        if(win_top >= 1800 && win_top < 2740){
            $('.main_tit').css('color','#fff');
            $('.tab_name').css('color','#fff');
            $('a.lnb_wrap div').css('background-color','#fff');
        } else {
            $('.main_tit').css('color','#000');
            $('.tab_name').css('color','#000');
            $('a.lnb_wrap div').css('background-color','#000');
        }

        // page2
        if(win_top >= section2_top-180){
            $('.page2_img1').animate({
                'left': '0',
                'opacity':'1',
            }, 800);

            $('.section2 .page_wrap').animate({
                'top': '0',
                'opacity':'1',
            }, 1200);

            $('.section2 .contents_1').animate({
                'top': '6%',
                'opacity':'1'
            }, 1600);
            $('.section2 .contents_2').animate({
                'top': '37%',
                'opacity':'1'
            }, 2400);
            $('.section2 .contents_3').animate({
                'top': '68%',
                'opacity':'1'
            }, 2900);
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

// const section = document.querySelector('section')

// section.addEventListener('scrollend', (e)=> {
//     const tit_wrap = document.querySelector('.tit_wrap')
//     const scrollPosition = tit_wrap.scrollTop;

//     const titWrap = document.querySelector('.tit_wrap');
//     titWrap.style.position = scrollPosition > 10 ? 'fixed' : 'relative';
//     titWrap.style.top = '0';
//     titWrap.style.left = '0';

// })