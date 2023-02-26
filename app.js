// setTimeout(function fade () {
//     const wrapper = document.querySelector('.wrapper');
//     wrapper.classList.add('fade')

//     window.addEventListener('load', fade());
// }, 1000);


document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 300,
        strings: "Yan Pedro"
    }).go()
})

var speed = {
distance: '-50px',
duration: 1400,
delay: 400,
origin: 'top'
};

var speedmin = {
distance: '-10px',
duration: 1400,
delay: 400
};

// var speedRight = {
// distance: '-60px',
// duration: 1200,
// delay: 400,
// origin: 'right'
// }
// var speedLeft = {
// distance: '-60px',
// duration: 1600,
// delay: 400,
// origin: 'left'
// }
window.sr = ScrollReveal({ reset: true });

sr.reveal('.respo, .foto, .text-1, .sect-05-flex, .skills, .sect-04 > h1, .sect-05 > h1, .btn-hover, .sect-05-flex, .card-contact, h6, .row, aside, list-contact', speed ,{delay: 500, origin:'top',});

// sr.reveal('', speedRight ,{delay: 200, origin:'right',});

// sr.reveal('.respo, .foto', speedLeft ,{delay: 200, origin:'left',});

sr.reveal('.sect-flex-1 > img',speed,{
duration: 2000,
});

sr.reveal('.sect-03 h1, p',speedmin,{
duration: 1000,
});

const btnMobile = document.getElementById('btn-mobile');

function menuAct (event) {
if (event.type === 'touchstart') event.preventDefault();
const nav = document.getElementById('nav');
nav.classList.toggle('active');
}
btnMobile.addEventListener('click', menuAct);
btnMobile.addEventListener('touchstart', menuAct);

