$(document).ready(function () {

    var scene1 = document.getElementById('scene1');
    var parallaxInstance1 = new Parallax(scene1);
    parallaxInstance1.scalar(8, 8);

//    var scene2 = document.getElementById('scene2');
//    var parallaxInstance2 = new Parallax(scene2);
//    parallaxInstance2.limit(0);
//    parallaxInstance2.invert(5, 5);

    setTimeout(function () {
        $('body').addClass('loaded');
        window.sr = ScrollReveal();
        sr.reveal('.title', {
            delay: 1000,
            useDelay: 'onload',
            duration: 1000
        });
        sr.reveal('.title_small', {
            delay: 1000,
            useDelay: 'onload',
            duration: 2000
        });
        sr.reveal('.avatar', {
            delay: 1000,
            useDelay: 'onload',
            duration: 1000
        });
    }, 1500);

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['Welcome', 'Skills', 'Ideas', 'Coding', 'UXUI', 'SEO', 'Contact', 'Impressum'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: [''],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        verticalCentered: false,
        sectionsColor: ['#fff', '#fff', '#fff', '#090f21', '#fff', '#fff', '#fff', '#fff']
        /*,
                afterLoad: function (anchorLink, index) { 
                    var loadedSection = $(this);
                    if (anchorLink == 'whopage') {
                        $(".logo").animate({
                            opacity: 1
                        }, 500);
                        $(".scrollanimation").animate({
                            opacity: 1
                        }, 500);
                    } else if (anchorLink == 'startpage') {
                        $(".logo").animate({
                            opacity: 1
                        }, 500);
                        $(".logo").animate({
                            opacity: 1
                        }, 500);
                        $(".scrollanimation").animate({
                            opacity: 1
                        }, 500);
                    }
                }*/
    });

    $('.type-it').typeIt({
            startdelay: 4000,
            speed: 150
        })
        .tiPause(2500)
        .tiType('Hi, <strong>dear visitor</strong>')
        .tiPause(1000)
        .tiType(' :-)')
        .tiPause(1000)
        .tiDelete(16)
        .tiPause(1000)
        .tiType('my name is ')
        .tiType('<strong>Waldemar Helwich</strong>.')
        .tiPause(2000)
        .tiDelete(33)
        .tiPause(1000)
        .tiType('I am an educated <strong>IT-Specialist</strong>')
        .tiPause(2000)
        .tiType(' ... living in Germany.')
        .tiPause(1000)
        .tiDelete(22)
        .tiPause(500)
        .tiType(' ... with passion for <strong>good looking UI-Stuff</strong>.')
        .tiPause(1000)
        .tiDelete(42)
        .tiPause(500)
        .tiType(' ... with great enthusiasm for <strong>smart code</strong>.')
        .tiPause(1000)
        .tiDelete(41)
        .tiPause(500)
        .tiType(' ... always looking forward for <strong>new technologies and trends</strong>.')
        .tiPause(1000)
        .tiDelete(59)
        .tiPause(500)
        .tiType(' ... creating marvellous <strong>user-experience through design</strong>.')
        .tiPause(1000)
        .tiDelete(55)
        .tiPause(500)
        .tiType(' ... Have fun on my Website!')
        .tiPause(800)
        .tiDelete(1)
        .tiType(' <strong>;-)</strong>');

    particlesJS.load('particles-js', 'assets/particlesjs.json', function () {});


});
