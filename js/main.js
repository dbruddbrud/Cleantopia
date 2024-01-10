$(document).ready(function(){

    $('.sub_menu>li>a').mouseover(function(){
        $(this).css({
            color: '#0072bc'
        })
        }).mouseout(function(){
            $(this).css({
                color: 'black'
        })
    })

    $('.right_gnb>li').click(function(){
        $('.right_gnb>li').removeClass('on');
        $(this).addClass('on');
        return false;
    })


    $('.con_wrap_2>li').mouseover(function(){
        $(this).stop().animate({
            top: '-18px',
        },400)
        $(this).find('.go_arrow').stop().animate({
            bottom: '24.5px'
        },200)
       
    }).mouseout(function(){
        $(this).stop().animate({
            top:0,
        })
        $(this).find('.go_arrow').stop().animate({
            bottom: '-26px'
        },200)
       
    })

    $('.con_wrap_6>li').mouseover(function(){
        $(this).find('.blue_box').stop().animate({
            opacity: 1,
        },100)

        $(this).find('.con_title, .img_6, .percent, .information').css({
            opacity: '30%'
        })
    }).mouseout(function(){
        $(this).find('.blue_box').stop().animate({
            opacity: 0,
        },100)

        $(this).find('.con_title, .img_6, .percent, .information').css({
            opacity: '100%'
        })
    })

    $('.menu_icon').click(function(){
        $('.ham_menu').css({
            display: 'block'
        })
    })

    $('.close_btn').click(function(){
        $('.ham_menu').css({
            display: 'none'
        })
    })

    /* top_btn */

    $('.top_btn').click(function(){
        $('html').animate({
            scrollTop: 0
        })
    })


});