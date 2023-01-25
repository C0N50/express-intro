// packages do not have ./ or a .js
const express = require('express');

//create an express app
const app = express();

//set up middleware
app.use(express.static('server/public'));

//set up body parser
app.use(express.urlencoded({extended:true}));

console.log('What is my purpose? 🤖');

const PORT = 8000;


//specific data to request
let kitties = [
    'Xiu Xiu',
    'Zeke',
    'Pala'
];

const quotes = [];
const ratings = [];


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

//Post Request
app.post('/', (req, res) => {
    console.log('Receiving a POST request!', req.body);

    const quote = req.body.quote;
    const rating = req.body.rating;


    quotes.push([quote, rating]);

    console.log('My quotes and ratings:', quotes);

    res.sendStatus(201); //code says "created"

});