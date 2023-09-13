const express = require('express');
const path = require('path');
const hbs = require('hbs');


const app = express();

app.set('views', './src/views');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send("Strona dziala lol");
    res.render('index', {
        pageTitle: 'Strona glowna lol'
    });
});

app.get('/omnie', (req, res) => {
    res.render('omnie', {
        pageTitle: 'Strona o mnie lol'
    });
});
app.get('/kontakt', (req, res) => {
    res.render('kontakt', {
        pageTitle: 'Strona kontakt lol'
    });
});

app.listen(5000, () => {
    console.log("Serwer dziala lol");
});