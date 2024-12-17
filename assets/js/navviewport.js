$(function () {

    var $win = $(window);
    var winH = $win.height(); // window height

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH) {
            //console.log('navOff')
            $('.dynamicnav').removeClass('navOff');
        } else {
            //console.log('navOn')
            $('.dynamicnav').addClass('navOff');
        }
    }).on("resize", function () { // read window size change
        winH = $(this).height(); // update height value
    });
});
$(function () {
    $('.creation').click(function () {
        $('.dimmer').fadeIn(300);
        $('.creationdialog').addClass('cdactive');
    })
    $('.xcont, .cbutton').click(function () {
        $('.creationdialog').removeClass('cdactive');
        $('.dimmer').fadeOut(300);
    })
})

function chapter() {
    //calc offset
    var about = $('#about').offset().top - $(window).scrollTop();

    var threed = $('#3d').offset().top - $(window).scrollTop();
    var design = $('#design').offset().top - $(window).scrollTop();
    //var comm = $('#comm').offset().top - $(window).scrollTop();
    //var trivia = $('#trivia').offset().top - $(window).scrollTop();
    //var extra = $('#extra').offset().top - $(window).scrollTop();
    
    

    //BOOL
    let aboutbool, threedbool, designbool
    //var commbool;
    //var triviabool;
    //var extrabool;

    if (about <= 0) {
        aboutbool = true;
        //console.log("about active")
    } else {
        aboutbool = false;
    }

    if (threed <= 0) {
        threedbool = true;
        aboutbool = false;
    } else {
        threedbool = false;
    }

    if (design <= 0) {
        designbool = true;
    } else {
        designbool = false;
    }

    //if (comm <= 0) {
    //    commbool = true;
    //    designbool = false;
    //} else {
    //    commbool = false;
    //}
//
    //if (trivia <= 0) {
    //    triviabool = true;
    //    commbool = false;
    //} else {
    //    triviabool = false;
    //}
//
    //if (extra <= 0) {
    //    extrabool = true;
    //    triviabool = false;
    //} else {
    //    extrabool = false;
    //}

    //console.log('creatbool', threedbool, '\n designbool', designbool, '\n commbool', commbool, '\n triviabool', triviabool, '\n extrabool', extrabool )
    //console.log('threedbool %s, designbool %s, triviabool %s', threedbool, designbool, triviabool, extrabool)

    const sections = [
        { bool: aboutbool, selector: '.s1' },
        { bool: threedbool, selector: '.s2' },
        { bool: designbool, selector: '.s2-1' },
        //{ bool: commbool, selector: '.s2-2' },
        //{ bool: triviabool, selector: '.s2-3' },
        //{ bool: extrabool, selector: '.s2-4' }
    ];
    
    sections.forEach(section => {
        if (section.bool) {
            $(section.selector).addClass('activestrike');
        } else {
            $(section.selector).removeClass('activestrike');
        }
    });
    
}
chapter();
$(window).scroll(chapter);