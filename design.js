
function changeColor(x) {





    if (x % 2 == 0) {
        3
        document.querySelector('#firstvote1').style.color = "green";
    }

    else if (x % 2 !== 0) {
        document.querySelector('#firstvote1').style.color = "red";
    }
}


const span = document.querySelector('#firstvote1');
let htmlString = "";

for (let i = 0; i < 10; i++) {

    changeColor(i)
    //if (i % 2 == 0) {


    htmlString += '<span>Vote For a change </span>';

    //}

    // else if (i % 2 !== 0) {

    //     htmlString += '<span>You doing the right thing </span>';
    // }

}
span.innerHTML = htmlString;




