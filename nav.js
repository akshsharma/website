const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks= document.querySelectorAll('.links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('activeNav');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else{
                link.getElementsByClassName.animation = `navLinkFade 0.5s ease forward ${index / 7 + 2}s`;
            }
        });
    });
    
}

navSlide();