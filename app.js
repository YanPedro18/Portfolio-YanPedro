document.addEventListener('DOMContentLoaded', () => {
            new TypeIt(".animated", {
                speed: 300,
                strings: "Yan Pedro"
            }).go()
})

var speed = {
    distance: '-50px',
    duration: 1400,
    delay: 400
};

var speedmin = {
    distance: '-10px',
    duration: 1400,
    delay: 400
};
window.sr = ScrollReveal({ reset: true });

sr.reveal('.text-1 > p, .text-1 > h3, .text-1 > h1, .foto, .skills, .sect-04 > h1, .sect-05 > h1, .btn-hover, .sect-05-flex, .card-contact, h6, .row, aside, list-contact', speed ,{delay: 200, origin:'top',});

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