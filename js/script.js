let func = function(index, nextIndex, direction) {
    if (nextIndex !== 1) {
        $('.form').show();
        $('.logo-md').show();
        $('.menu-md').show();
        $('.logo-lg').hide();
    } else if (nextIndex == 1) {
        $('.form').hide();
        $('.logo-md').hide();
        $('.menu-md').hide();
        $('.logo-lg').show();
    }
}

let screenOne = document.querySelector('.slides-main-1'),
    screenTwo = document.querySelector('.slides-main-2'),
    screenThree = document.querySelector('.slides-main-3'),
    screenFour = document.querySelector('.slides-main-4'),
    screenFive = document.querySelector('.slides-main-5')

screenOne.addEventListener('mouseover', function() {
    screenOne.style.flex = "0 0 25%";
    screenTwo.style.flex = "0 0 15%";
});
screenOne.addEventListener('mouseout', function() {
    screenOne.style.flex = "0 0 20%";
    screenTwo.style.flex = "0 0 20%";
    screenThree.style.flex = "0 0 20%";
    screenFour.style.flex = "0 0 20%";
    screenFive.style.flex = "0 0 20%";
});
screenTwo.addEventListener('mouseover', function() {
    screenTwo.style.flex = "0 0 25%";
    screenThree.style.flex = "0 0 15%";
});
screenTwo.addEventListener('mouseout', function() {
    screenOne.style.flex = "0 0 20%";
    screenTwo.style.flex = "0 0 20%";
    screenThree.style.flex = "0 0 20%";
    screenFour.style.flex = "0 0 20%";
    screenFive.style.flex = "0 0 20%";
});
screenThree.addEventListener('mouseover', function() {
    screenThree.style.flex = "0 0 25%";
    screenFour.style.flex = "0 0 15%";
});
screenThree.addEventListener('mouseout', function() {
    screenOne.style.flex = "0 0 20%";
    screenTwo.style.flex = "0 0 20%";
    screenThree.style.flex = "0 0 20%";
    screenFour.style.flex = "0 0 20%";
    screenFive.style.flex = "0 0 20%";
});
screenFour.addEventListener('mouseover', function() {
    screenFour.style.flex = "0 0 25%";
    screenFive.style.flex = "0 0 15%";
});
screenFour.addEventListener('mouseout', function() {
    screenOne.style.flex = "0 0 20%";
    screenTwo.style.flex = "0 0 20%";
    screenThree.style.flex = "0 0 20%";
    screenFour.style.flex = "0 0 20%";
    screenFive.style.flex = "0 0 20%";
});
screenFive.addEventListener('mouseover', function() {
    screenFive.style.flex = "0 0 25%";
    screenFour.style.flex = "0 0 15%";
});
screenFive.addEventListener('mouseout', function() {
    screenOne.style.flex = "0 0 20%";
    screenTwo.style.flex = "0 0 20%";
    screenThree.style.flex = "0 0 20%";
    screenFour.style.flex = "0 0 20%";
    screenFive.style.flex = "0 0 20%";
});


jQuery(document).ready(function($) {
    $("#fullpage").fullpage({
        anchors: ['', '1page', '2page', '3page', '4page', '5page', ''],
        sectionsColor: ['#777','#888','#999','#a8a8a8','#aeaeae','#dedede','#888888'],
        menu: '#menu',
        navigation: false,
        navigationTooltips: ['Вверх','Спорт-бар','Боулинг','Караоке','Ресторан "Веранда"','Бар "Туман"', 'Карта'],
        slidesNavigation:false,
        controlArrows: false,
        autoScrolling: true,
        verticalCentered: false,
        onLeave: func,
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
            if (slideIndex !== 3) {
                $('.form').hide();
                console.log(slideIndex);
            } else if (slideIndex == 3) {
                $('.form').show();
            }
        }
});
})




let gallery = document.querySelector('.gallery')    // Объявляю контейнер для будущей галлереи

let arr = ['https://dota2.ru/img/heroes/abaddon/m_icon.jpg', 'https://dota2.ru/img/heroes/alchemist/m_icon.jpg', 'https://dota2.ru/img/heroes/axe/m_icon.jpg', 'https://dota2.ru/img/heroes/beastmaster/m_icon.jpg', 'https://dota2.ru/img/heroes/brewmaster/m_icon.jpg','https://dota2.ru/img/heroes/bristleback/m_icon.jpg','https://dota2.ru/img/heroes/centaur_warrunner/m_icon.jpg','https://dota2.ru/img/heroes/chaos_knight/m_icon.jpg','https://dota2.ru/img/heroes/pudge/m_icon.jpg','https://dota2.ru/img/heroes/bounty_hunter/m_icon.jpg','https://dota2.ru/img/heroes/techies/m_icon.jpg', 'https://dota2.ru/img/heroes/zeus/m_icon.jpg', 'https://dota2.ru/img/heroes/witch_doctor/m_icon.jpg','https://dota2.ru/img/heroes/winter_wyvern/m_icon.jpg','https://dota2.ru/img/heroes/windranger/m_icon.jpg', 'https://dota2.ru/img/heroes/warlock/m_icon.jpg', 'https://dota2.ru/img/heroes/visage/m_icon.jpg']
                                                    //сверху просто массив с картинками рандомными, ссылки на пикчи в тырнете
arr.forEach(function(item){                         //задаю массиву цикл
let div = document.createElement('div')             //создаю див
let img = document.createElement('img')             //создаю картинку
let a = document.createElement('a')                 //создаю ссылку
a.setAttribute('href', item)                        //задаю картинке аттрибут href - элемент из массива
a.setAttribute('rel', 'group')                      //задаю картинке rel="group"- это для fancybox
a.classList.add('fancybox')                         //добавляю ссылке класс
img.setAttribute('src',item)                        //задаю картинке аттрибут src - элемент из массива
img.setAttribute('width','286px')                   //задаю картинке ширину и высоту  - для красоты
img.setAttribute('height','160px')                  //
div.classList.add('gallery-item')                   //добавляю диву класс
a.appendChild(img)                                  //запихиваю в 'a' картинку
div.appendChild(a)                                  //запихиваю в див 'a' с картинкой
gallery.appendChild(div)                            //запихиваю див в контейнер заготовленный заранее
})


$(function() {
 $(".fancybox").fancybox();
});

$('.gallery').slick({
    dots: false,
    infinite: false,
    speed: 300,
    rows: 2,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
    {
        breakpoint: 1400,
        settings: {
            rows: 1,
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 1024,
        settings: {
          rows: 1,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
          rows: 1,
          slidesToShow: 2,
          slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }

    ]
  });
