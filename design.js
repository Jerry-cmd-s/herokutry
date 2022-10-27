//creating an anonymous functon dont know why 
const navslide = () => {

    const burger = document.querySelector('.burger');
    const votenav = document.querySelector('.votenavcontents');

    burger.addEventListener('click', () => {
        votenav.classList.toggle('nav-activ');
    });
}
navslide();