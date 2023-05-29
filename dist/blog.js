
const displaytextarea = () => {

    const textbox = document.querySelector('.texcontainerdiv');
    const button = document.querySelector('.postdiscussion');

    button.addEventListener('click', () => {
        textbox.style.display = 'block';

    });


}
displaytextarea();


