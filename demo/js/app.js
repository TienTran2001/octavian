
// const iconToggle = document.querySelector('.icon-toggle');
// const addToggle = document.querySelector('.mobile');
// const close = document.querySelector('.close');
// const layer = document.querySelector('.layer');
// const partnerList = document.querySelectorAll('.partner-item');
// const right = document.querySelector('.right');
// const left = document.querySelector('.left');


// iconToggle.addEventListener('click', () => {
//     addToggle.classList.add('toggle');
//     layer.classList.add('addLayer');
// })

// close.addEventListener('click', () => {
//     addToggle.classList.remove('toggle');
//     layer.classList.remove('addLayer');
// })

// layer.addEventListener('click', () => {
//     addToggle.classList.remove('toggle');
//     layer.classList.remove('addLayer');
// })
// let lengthPartner = partnerList.length;
// right.addEventListener('click', () => {
//     for (let i = 0; i < lengthPartner; i++) {
        
//         if(partnerList[i].classList.contains('active')) {
//             let x = i + 1;
//             partnerList[i].classList.remove('active')
//             partnerList[x].classList.add('active')
//             return
//         }
//         if(partnerList[lengthPartner - 1].classList.contains('active')) {
//             partnerList[lengthPartner - 1].classList.remove('active')
//             partnerList[0].classList.add('active')
//             return
//         }
//     }
// })
// left.addEventListener('click', () => {
//     for (let i = lengthPartner - 1; i > 0; i--) {
        
//         if(partnerList[i].classList.contains('active')) {
//             let x = i - 1;
//             partnerList[i].classList.remove('active')
//             partnerList[x].classList.add('active')
//             return
//         }
//         if(partnerList[0].classList.contains('active')) {
//             partnerList[0].classList.remove('active')
//             partnerList[lengthPartner - 1].classList.add('active')
//             return
//         }
//     }
// })


const iconMenu = $('.icon-toggle')
const addToggle = $('.mobile')
const close = $('.close')
const layer = $('.layer')
const partnerList = $('.partner-item')
const right = $('.right');
const left = $('.left');
//menu 
function menu() {   
    //open
    iconMenu.click(function (e) { 
        e.preventDefault();
        addToggle.addClass('toggle')
        layer.addClass('addLayer')
    });
    //close
    close.click(function (e) { 
        e.preventDefault();
        addToggle.removeClass('toggle')
        layer.removeClass('addLayer')
    }); 
    // lick lớp phủ để đóng
    layer.click((e) => {
        e.preventDefault() 
        addToggle.removeClass('toggle')
        layer.removeClass('addLayer')
    })

    // click item đóng
    $('.mobile-link').click(() => {
        addToggle.removeClass('toggle')
        layer.removeClass('addLayer')
    })
    // back to top & kéo header
    $(window).scroll(() => {
        if($(this).scrollTop()) {
            $('.backToTop').addClass('backToTopHide')
           $('.header').addClass('fixed')
           
        }else {
            $('.backToTop').removeClass('backToTopHide')
            $('.header').removeClass('fixed')          
        }
    })  

    // ẩn hiện header khi scroll
    let lastScroll = 0; 
    $(window).scroll(() => {
        const currentScroll = window.pageYOffset;
        if(currentScroll >  lastScroll) {
           $('.header').addClass('headerHide') 
        }
        else {
            $('.header').removeClass('headerHide') 
        }
        lastScroll = currentScroll;
    })
}

function scrollSmooth() {
    //scroll
   $('#home').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop: $('.header').offset().top}, 1200,"easeOutExpo")
    });
    $('#portfolio').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop: $('.portfolio').offset().top}, 1200,"easeOutExpo")
    });
    $('#partner').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop: $('.partner').offset().top}, 1200,"easeOutExpo")
    });
    $('#blog').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop: $('.blog').offset().top}, 1200,"easeOutExpo")
    });
    $('#team').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop: $('.team').offset().top}, 1200,"easeOutExpo")
    });
    $('#contact').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop: $('.contact').offset().top}, 1200,"easeOutExpo")
    });
    $('.backToTop').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 1000,"easeOutExpo")// ({params}, speed, callback) --> params: cac tham so css, speed: slow, fast, milliseconds
    });

    
    
}

// const partnerList = $('.partner-item')
// const right = $('.right');
// const left = $('.left');
let active = $('.active')

function slideShow() {
    //next
    let time = setInterval(() => {
        $('.right').trigger('click');
    }, 2000)
    right.click(function (e) { 
        //clearInterval(time)
        e.preventDefault();
        let nextActive = $('.active').next()
        let active = $('.active')
        
        if(nextActive.length == 0) {
            active.addClass('toLeft').one("webkitAnimationEnd", function(){
                $('.toLeft').removeClass('toLeft')
              });
            $('.partner-list .partner-item:first-child').addClass('fromToRight').one("webkitAnimationEnd", function(){
                active.removeClass('active')
                $('.fromToRight').addClass('active').removeClass('fromToRight')
              });
        } else {
            active.addClass('toLeft').one("webkitAnimationEnd", function(){
                $('.toLeft').removeClass('toLeft')
            });
            nextActive.addClass('fromToRight').one("webkitAnimationEnd", function(){
                active.removeClass('active')
                $('.fromToRight').addClass('active').removeClass('fromToRight')
            });
        }
        
    });

    left.click(function (e) { 
        clearInterval(time)
        e.preventDefault();
        let prevActive = $('.active').prev()
        let active = $('.active')
        if(prevActive.length == 0) {
            active.addClass('toRight').one("webkitAnimationEnd", function(){
                $('.toRight').removeClass('toRight')
              });
            $('.partner-list .partner-item:last-child').addClass('fromToLeft').one("webkitAnimationEnd", function(){
                active.removeClass('active')
                $('.fromToLeft').addClass('active').removeClass('fromToLeft')
              });
        } else {
            active.addClass('toRight').one("webkitAnimationEnd", function(){
                $('.toRight').removeClass('toRight')
            });
            prevActive.addClass('fromToLeft').one("webkitAnimationEnd", function(){
                active.removeClass('active')
                $('.fromToLeft').addClass('active').removeClass('fromToLeft')
            });
        }
    });

    
}

$(document).ready(function () {
    menu()
    scrollSmooth()
    slideShow()
});
