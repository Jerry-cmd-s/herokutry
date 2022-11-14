//creating an anonymous functon dont know why 




const state_array = ['Select your state', 'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    ;

var states = "";
const stateOption = () => {

    for (i = 0; i < state_array.length; i++) {

        if (i == 0) {
            states += "<option  disabled selected >" + (state_array[i]) + "</option>"
        }
        states += "<option>" + (state_array[i]) + "</option>"

    }
    document.getElementById("st").innerHTML = states;
}







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


for (var y = year; y <= till; y++) {


    if (y == 0) {
        options += "<option  disabled selected >" + 'Select Age' + "</option>"
    }

    options += "<option  >" + y + "</option>";

}


document.getElementById("Age").innerHTML = options;
stateOption();



