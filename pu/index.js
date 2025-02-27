
$(function(){
    $('.deth1').mouseover(function(){
        $('.deth1').children().removeClass('on');
        $('.deth1').children().css('color','#d9d9d9');
        $(this).children().addClass('on');
        $(this).children().css('color','#222');
    });
    $('.deth1').mouseleave(function(){
        $(this).children().removeClass('on');
        $('.deth1').children().css('color','#222');
    });

    // bx
    $('.bxslider').bxSlider({
        auto: true,
        pause: 3000,
        autoHover: true,
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 500,
        slideMargin: 4,
    });

    // swiper
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', 
        slidesPerView: 6,
        slidesPerGroup : 1, // 그룹으로 묶을 수
        spaceBetween: 60, // 슬라이드간 padding 값

        loopFillGroupWithBlank : false,

        loop: true,
        loopAdditionalSlides: 1,
        autoplay:{delay: 4000},

        pagination: {
            el: '.swiper-pagination',
            clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
            type: 'progressbar', // And if we need scrollbar 진행바
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        
    })

    // header        
    $(window).scroll(function(){
        let winTop = $(window).scrollTop();

        if(winTop >= 0) {
            $('#header').css('position','fixed');
            $('#header').css('top','0');
        } else {
            $('#header').css('position','relative');
        }
    })

    //con01 deco
    $(window).scroll(function(){
        let winTop = $(window).scrollTop();
        let con01 = $('.con01').offset().top;

        let isAnimated = $('.con01_deco1').data('animated');

        if(winTop >= con01-340 && !isAnimated) {
            $('.con01_deco1').data('animated', true);
            $('.con01_deco1').animate({left:'43%'},400)
                             .animate({width:'10%'},400);
            $('.con01_deco2').animate({right:'43%'},400)
                             .animate({width:'8%'},400);
        } 
    })

    //con03
    $('.tab').click(function(){
        let vid = $(".wrap video");

        // vid[0].pause();
        vid.css("display","none")
        $('.tab').removeClass('on');            
        $(this).addClass('on');            
        $('.con03 .wrap').removeClass('on');            
        $(this).next().addClass('on');
    })

    $('.wrap img.paly_btn').click(function(e){
        e.preventDefault();
        $(this).next().css("display","block");
        $(this).next().play();
    })

    function vid_play (tab_num, vid_url){
        $('.wrap video').attr('src','');
        $('.wrap'+tab_num).find('video').attr('src',vid_url)
    }

    //agree
    $('#agree_all').change(function(){
        $('.agree_ck').prop('checked', $(this).is(':checked'))
    })

    $('.agree_ck').change(function(){
        if($('.agree_ck:checked').length == 2){
            $('#agree_all').prop('checked', true);
        } else {
            $('#agree_all').prop('checked', false);
        }
    })

    close();
    sign();

    $('.bg').click(function(){
        $(this).parent().fadeOut();
    })
});

function sign() {
    let sign_btn = document.getElementsByClassName('sign_btn')[0];
    if(sign_btn) {
        sign_btn.addEventListener('click', function() {
            const pop1 = document.getElementsByClassName('sign_wrap')[0];
            pop1.style.display = 'block'
        })
    }
}

function close() {
    let close_btn = document.getElementsByClassName('close')[0];
    if(close_btn) {
        close_btn.addEventListener('click', function(){
            const parentElement = close_btn.parentElement;
            const grandParentElement = parentElement ? parentElement.parentElement : null;
            if(grandParentElement) {
                grandParentElement.style.display = 'none';
            }
        })
    }
}