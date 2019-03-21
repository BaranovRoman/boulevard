let slides = [];
slides.push(screenOne);
slides.push(screenTwo);
slides.push(screenThree);
slides.push(screenFour);
slides.push(screenFive);

// console.log(slides[1]);

// function wideOut(e){
//     slides[e].addEventListener('mouseover', function(){
//         // e.style.flex = "0 0 30%";
//         console.log(slides[this]);
//     })
// }
let stul = "0 0 " + 100/slides.length + "%";
for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('mouseover', function(){
        slides[i].style.flex = "0 0 30%";
        for (let e = 0; e < slides.length; e++) {
            if (e !== i) {
                slides[e].style.flex = "0 0 17.5%";
            }
        };
    });
    slides[i].addEventListener('mouseout', function(){
        slides[i].style.flex = stul;
    })
};

let nnn = 100 / slides.length;
console.log(nnn);