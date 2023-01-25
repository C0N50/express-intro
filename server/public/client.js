console.log('I am a client side script!');

let kittyArray = [];

$(document).ready(onReady);

function onReady () {
        console.log("I am ready for literally anything!");

        fetchKitties();
        render();
}


function fetchKitties() {
   let response = $.ajax({
        url : '/kitties',   // http://localhost:8000/kitties
        method : 'GET'
    }).then((response) => {
        console.log('GET /kitties complete!', response);
        kittyArray = response; 
        render();
    })
    console.log('Faster than cats!');
}

function render() {
    $('.kitty-names').empty();
    for (let kitty of kittyArray) {        
        $('.kitty-names').append(
        `<p>${kitty}</p>`
        );
    }
}