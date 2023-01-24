// packages do not have ./ or a .js
const express = require('express');

//create an express app
const app = express();

app.use(express.static('server/public'));

console.log('What is my purpose? 🤖');

const PORT = 8000;


//specific data to request
let utensils = [
    'spork',
    'sknife',
    'knork'
];


//"An Endpoint"
//GET http://localhost:800/utensils
// this code will run
app.get('/utensils', (req, res) => {
    console.log('somone needs utensils');
    res.send(utensils);
});

app.listen(PORT, () => {
    //~onReady()
    console.log('My purpose is to internet! 🤖');
});