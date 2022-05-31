//Variables Irrelevant To Functions


//Functions & Methods

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 75;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    };
};

function lightUp() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('underline')
    } else {
        navbar.classList.remove('underline')
    }

}

//Calls and Inits

window.addEventListener('scroll', reveal);

window.addEventListener('scroll', lightUp);
