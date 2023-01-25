console.log('I am a client side script!');


$(document).ready(onReady);

function onReady () {
        console.log("I am ready for literally anything!");

        fetchKitties();
}


function fetchKitties() {
    $.ajax({
        url : '/kitties',   // http://localhost:8000/kitties
        method : 'GET'
    }).then((response) => {
        console.log('GET /kitties complete!', response);
    })

    console.log('Faster than cats!');
}