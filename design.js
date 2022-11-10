//creating an anonymous functon dont know why 







const navslide = () => {

    const burger = document.querySelector('.burger');
    const votenav = document.querySelector('.votenavcontents');

    burger.addEventListener('click', () => {
        votenav.classList.toggle('nav-activ');
    });
}
navslide();










var year = 0;
var till = 150;
var options = "";

var age_alert = "";

for (var y = year; y <= till; y++) {



    // {  ;}
    if (y == 0) {
        options += "<option  disabled selected >" + 'Select Age' + "</option>"
    }

    options += "<option  >" + y + "</option>";


}


document.getElementById("Age").innerHTML = options;




