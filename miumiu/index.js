$(document).ready(function() {
    $('.gnb_button').click(function(){
        $('.deth1').css('display','none')
        $(this).next().css('display','flex')
    })

    // 메인 로고 
    let stop_move = true; //true 일때 window.scroll 작동 x
    $('.gnb_button').on("click", function(){
        stop_move = false;
        $('.main_img').css('width','0');
        $('.gnb_img').css('width','80%');
        $('.gnb_img img').css('width','140px');
    })

    $('.close_btn').on('click', function(){
        $(this).parent().fadeOut();
        stop_move = true;
    })

    $(window).scroll(function(){
        let win_top = $(window).scrollTop();
        
        if(win_top > 100 && !$('.main_img').hasClass('animated') && stop_move){
            $('.main_img').addClass('animated');
            $('.main_img').animate({
                'width':'0%',
                'margin':'0'
            },800)
            $('.gnb_img').animate({
                'width':'80%'
            },1000)
            $('.gnb_img > img').animate({
                'width':'140px'
            },1000)
        } else if (win_top <= 100 && $('.main_img').hasClass('animated') && stop_move) {
            $('.main_img').removeClass('animated');
            $('.main_img').animate({
                'width':'80%',
                'margin-top':'-1.2%'
            },800)
            $('.gnb_img > img').animate({
                'width':'0'
            },1000)
            $('.gnb_img').animate({
                'width':'0'
            },1000)
        }

        if(win_top > 450){
            $('.fl_banner').fadeIn();
        } else{
            $('.fl_banner').fadeOut();
        }
    })

    /* lnb max-width: 1088px */
        $('.mini_menu').hide();
        
        $('.menu_tab').click(function(){
            $('.mini_menu').not($(this).next()).slideUp();
            $(this).next().slideToggle();
        });

        let miniGnbBtn = true
        $('.menu_wrap > button').click(function(){
            if(miniGnbBtn){
                $(this).next().show();
                $(this).text('×')
                $(this).css('font-size','26px')
                miniGnbBtn = false;
            } else {
                $(this).next().hide();
                $(this).text('MENU')
                $(this).css('font-size','14px')
                miniGnbBtn = true;
                $('.mini_menu').hide();
            }
        })
    // -------------------------------

    // section slider
    $('.ticker ul').bxSlider(
        {speed: 26000, maxSlides:3, slideMargin:30, ticker:true, tickerHover:true, slideWidth: 1200}
    );

    // 언어 선택 창 열기
    $('.global_btn').click(function(){
        $('.global_lang').css('display','block');
        $('.global_wrap').animate({'right':'0'},400);
    })
    
})

// 언어 선택 창 닫기
function global_close() {
    $('.global_lang').css('display','none');
}

function remove() {
    $('.global_wrap').animate({'right':'-50%'},400);
    setTimeout(global_close, 440);
}
// 

// 우측 하단 sns_btn
function sns_open() {
    let sns_btn = $('.sns_btn_wrap > a');

    if(sns_btn.hasClass('on')){
        sns_btn.removeClass('on');
        $('.sns_btn a').animate({
            'top':'83%',
            'opacity':'0'
        })
    } else{
        sns_btn.addClass('on');
        $('.sns_btn a:nth-child(1)').animate({
            'top':'0',
            'opacity':'1'
        },500)
        $('.sns_btn a:nth-child(2)').animate({
            'top':'21%',
            'opacity':'1'
        },700)
        $('.sns_btn a:nth-child(3)').animate({
            'top':'42%',
            'opacity':'1'
        },900)
        $('.sns_btn a:nth-child(4)').animate({
            'top':'62%',
            'opacity':'1'
        },1100)
    }
}

// 언어 선택  
document.addEventListener('DOMContentLoaded',function(){
    ShowCountries();

    let LanguageSelect = document.getElementsByClassName('global_lang');
    let countrySelect = document.getElementById('country');
    let applyButton = document.querySelector('.global_wrap > button');

    countrySelect.addEventListener('change', function(){
        ShowLanguages(this.value);
    })

    // 국가 선택 후 언어 선택 가능
    if (countrySelect.value) {
        ShowLanguages(countrySelect.value);
    }

    if(applyButton) {
        applyButton.addEventListener('click',function(){
            LanguageSelect[0].style.display = 'none';
        })
    }
})

//국가 선택
let countries = [
    'United States',
    'Brazil',
    'Argentina',
    'United Kingdom',
    'France',
    'Germany',
    'Italy',
    'Spain',
    'Russia',
    'China',
    'Japan',
    'South Korea'
]

//국가에 맞는 언어 노출
let languageMap = {
    'United States':["English"],
    'Brazil':["English",'Portuguese'],
    'Argentina':["English"],
    'United Kingdom':["English"],
    'France':["English",'French'],
    'Germany':["English",'Deutsch'],
    'Italy':["English",'Italian'],
    'Spain':["English", "Spanish"],
    'Russia':["English"],
    'China':["Chinese", "English"],
    'Japan':["Japanese", "English"],
    'South Korea':["Korean", "English"]
}

// 국가선택 함수
function ShowCountries() {
    let countrySelect = document.getElementById('country');
    countrySelect.innerHTML = '<option value="">국가를 선택하세요</option>';
    
    for (let i = 0; i < countries.length; i++) {
        let option = document.createElement('option');
        option.value = countries[i];
        option.textContent = countries[i];
        countrySelect.appendChild(option);
    }
}

// 언어선택 함수
function ShowLanguages(selectedCountry) {
    let LanguageSelect = document.getElementById('lang');
    LanguageSelect.innerHTML = '<option value="">언어를 선택하세요</option>';

    if(selectedCountry && languageMap[selectedCountry]){
        for (let lang of languageMap[selectedCountry]) {
            let option = document.createElement('option');
            option.value = lang;
            option.textContent = lang;
            LanguageSelect.appendChild(option);
        }
    }
}

// video 조작
function vid_play(vid_url) {
    let vid = $(".vid_wrap video");

    $('.vid_wrap').css('display','block');
    vid.attr('src',vid_url)
}

function vid_stop() {
    let vid = $(".vid_wrap video");

    $('.vid_wrap').fadeOut();
    vid.attr('src','')
}




