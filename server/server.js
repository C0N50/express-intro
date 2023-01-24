// packages do not have ./ or a .js
const express = require('express');

//create an express app
const app = express();

app.use(express.static('server/public'));

console.log('What is my purpose? 🤖');

const PORT = 8000;

app.listen(PORT, () => {
    //~onReady()
    console.log('My purpose is to internet! 🤖');
});