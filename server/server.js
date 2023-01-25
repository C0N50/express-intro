// packages do not have ./ or a .js
const express = require('express');

//create an express app
const app = express();

app.use(express.static('server/public'));

console.log('What is my purpose? 🤖');

const PORT = 8000;


//specific data to request
let kitties = [
    'Xiu Xiu',
    'Zeke',
    'Pala'
];


//"An Endpoint"
//GET http://localhost:800/utensils
// this code will run
app.get('/kitties', (req, res) => {
    console.log('Kitties need names!');
    res.send(kitties);
});

app.listen(PORT, () => {
    //~onReady()
    console.log('My purpose is to internet! 🤖');
});