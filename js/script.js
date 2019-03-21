let logoMd = document.querySelector('.logo-md'),
    menuMd = document.querySelector('.menu-md'),
    logoLg = document.querySelector('.logo-lg'), 
    menuMain = document.querySelector('.menu');
let func = function(index, nextIndex, direction) {
    if (nextIndex !== 1) {
        menuMain.style.left = "28.75%"
        logoMd.style.display = "block";
        menuMd.style.display = "block";
        logoLg.style.display = "none";
    } else if (nextIndex == 1) {
        menuMain.style.left = "calc(50% - 130px)"
        logoMd.style.display = "none";
        menuMd.style.display = "none";
        logoLg.style.display = "block";
    }
}

let screenOne = document.querySelector('.slides-main-1'),
    screenTwo = document.querySelector('.slides-main-2'),
    screenThree = document.querySelector('.slides-main-3'),
    screenFour = document.querySelector('.slides-main-4'),
    screenFive = document.querySelector('.slides-main-5');

let slides = [];
slides.push(screenOne);
slides.push(screenTwo);
slides.push(screenThree);
slides.push(screenFour);
slides.push(screenFive);

let big = ((100 / slides.length) * 1.5) ,
    normal = (100 / slides.length),
    less = ((100 - big) / (slides.length - 1));

for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('mouseover', function(){
        slides[i].style.flex = "0 0 " + big + "%";
        for (let e = 0; e < slides.length; e++) {
            if (e !== i) {
                slides[e].style.flex = "0 0 " + less + "%";
            }
        };
    });
    slides[i].addEventListener('mouseout', function(){
        slides[i].style.flex = "0 0 " + normal + "%";
        for (let e = 0; e < slides.length; e++) {
            if (e !== i) {
                slides[e].style.flex = "0 0 " + normal + "%";
            }
        };
    })
};


let linkOne = document.querySelector('#link1'),
    linkTwo = document.querySelector('#link2'),
    linkThree = document.querySelector('#link3'),
    linkFour = document.querySelector('#link4'),
    linkFive = document.querySelector('#link5'),
    logoMed = document.querySelector('#logo-medium'),
    vk = document.querySelector('#vk'),
    inst = document.querySelector('#inst'),
    phone = document.querySelector('#phone-header'),
    linkPhone = document.querySelector('.links-norm'),
    toBlack = function() {
        linkFive.classList.remove('menu-active');
        linkTwo.classList.remove('menu-active');
        linkThree.classList.remove('menu-active');
        linkFour.classList.remove('menu-active');
        linkOne.classList.remove('menu-active');
        linkOne.classList.add('white-hover');
        linkTwo.classList.add('white-hover');
        linkThree.classList.add('white-hover');
        linkFour.classList.add('white-hover');
        linkFive.classList.add('white-hover');
        logoMed.src = 'img/icons/logo-pink.png';
        vk.src = 'img/icons/vk-black.png';
        inst.src = 'img/icons/inst-black.png';
        phone.src = 'img/icons/phone-pink.png';
        linkPhone.style.color = "black";
    },
    toWhite = function() {
        logoMed.src = 'img/icons/logo-md.png';
        vk.src = 'img/icons/vk.png';
        inst.src = 'img/icons/inst.png';
        phone.src = 'img/icons/phone.png';
        linkOne.classList.remove('white-hover');
        linkTwo.classList.remove('white-hover');
        linkThree.classList.remove('white-hover');
        linkFour.classList.remove('white-hover');
        linkFive.classList.remove('white-hover');
        linkPhone.style.color = "white";
    }

jQuery(document).ready(function($) {
    $("#fullpage").fullpage({
        anchors: ['', '1page', '2page', '3page', '4page', '5page', 'mappage'],
        sectionsColor: ['#fefefe','#fefefe','#fefefe','#fefefe','#fefefe','#fefefe','#ffffff'],
        menu: '#menu',
        slidesNavigation: false,
        controlArrows: false,
        autoScrolling: true,
        verticalCentered: false,
        onLeave: func,
        afterLoad: function(index){
            if (index == '1page'){
                linkOne.classList.add('menu-active');
                linkTwo.classList.remove('menu-active');
                linkThree.classList.remove('menu-active');
                linkFour.classList.remove('menu-active');
                linkFive.classList.remove('menu-active');
                toWhite();
            } else if (index == '2page'){
                linkTwo.classList.add('menu-active');
                linkOne.classList.remove('menu-active');
                linkThree.classList.remove('menu-active');
                linkFour.classList.remove('menu-active');
                linkFive.classList.remove('menu-active');
                toWhite();
            } else if (index == '3page'){
                linkThree.classList.add('menu-active');
                linkTwo.classList.remove('menu-active');
                linkOne.classList.remove('menu-active');
                linkFour.classList.remove('menu-active');
                linkFive.classList.remove('menu-active');
                toWhite();
            } else if (index == '4page'){
                linkFour.classList.add('menu-active');
                linkTwo.classList.remove('menu-active');
                linkThree.classList.remove('menu-active');
                linkOne.classList.remove('menu-active');
                linkFive.classList.remove('menu-active');
                toWhite();
            } else if (index == '5page'){
                linkFive.classList.add('menu-active');
                linkTwo.classList.remove('menu-active');
                linkThree.classList.remove('menu-active');
                linkFour.classList.remove('menu-active');
                linkOne.classList.remove('menu-active');
                toWhite();
            } else if (index == 'mappage'){
                toBlack();
            }
        }
});
})




let gallery = document.querySelector('.gallery')    // Объявляю контейнер для будущей галлереи

let arr = ['https://st3.depositphotos.com/12039320/19242/i/1600/depositphotos_192424788-stock-photo-rear-view-man-bowling-ball.jpg', 'https://st.depositphotos.com/3662505/5112/i/950/depositphotos_51128497-stock-photo-bowling-game.jpg', 'https://st3.depositphotos.com/12039320/19242/i/1600/depositphotos_192424498-stock-photo-happy-young-man-throwing-bowling.jpg', 'https://st2.depositphotos.com/1001951/5713/i/950/depositphotos_57138693-stock-photo-group-of-young-people-in.jpg', 'https://st4.depositphotos.com/1662991/20267/i/1600/depositphotos_202679938-stock-photo-teen-boy-throwing-bowling-ball.jpg','https://st.depositphotos.com/2117297/4382/i/950/depositphotos_43822587-stock-photo-man-throwing-bowling-ball.jpg','https://st4.depositphotos.com/3261171/20975/i/1600/depositphotos_209755864-stock-photo-happy-delighted-men-participating-in.jpg','https://st3.depositphotos.com/5392356/19227/i/1600/depositphotos_192278604-stock-photo-friends-bowling-club-having-fun.jpg','https://st3.depositphotos.com/5392356/19228/i/1600/depositphotos_192280006-stock-photo-friends-having-fun-while-bowling.jpg','https://st2.depositphotos.com/3261171/6623/i/950/depositphotos_66237665-stock-photo-woman-holding-a-bowling-ball.jpg','https://st3.depositphotos.com/12039320/19242/i/1600/depositphotos_192425258-stock-photo-happy-young-friends-posing-balls.jpg', 'https://st2.depositphotos.com/2853475/7322/i/950/depositphotos_73228929-stock-photo-friends-at-bowling.jpg', 'https://st3.depositphotos.com/11328482/18001/i/1600/depositphotos_180010430-stock-photo-a-student-plays-bowling-a.jpg','https://st3.depositphotos.com/12039320/19242/i/1600/depositphotos_192424986-stock-photo-happy-young-friends-taking-selfie.jpg','https://st.depositphotos.com/1003434/2621/i/950/depositphotos_26212695-stock-photo-happiness.jpg', 'https://st2.depositphotos.com/2931363/5797/i/950/depositphotos_57976033-stock-photo-man-throwing-bowling-ball.jpg', 'https://st4.depositphotos.com/2769299/23184/i/1600/depositphotos_231845046-stock-photo-girl-bowling-ball.jpg']
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
 $(".fancybox").fancybox({
    cyclic: true                                    //fancybox
 });
});

$('.gallery').slick({                               //Slick-slider
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

$(document).ready(function(){                          //inputMask
    $('#phone').mask("+7 (999) 999-99-99");            //inputMask
    $('#phone2').mask("+7 (999) 999-99-99");           //inputMask
    $('#phone3').mask("+7 (999) 999-99-99");           //inputMask
    $('#phone4').mask("+7 (999) 999-99-99");           //inputMask
    $('#phone5').mask("+7 (999) 999-99-99");           //inputMask
});
