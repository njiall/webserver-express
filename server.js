const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const puerto = process.env.PORT || 3000; //Coge el valor del puerto cuando NO está desplegado en local. En caso contrario coge uno fijo

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Rubén'
    });
});

app.get('/acercade', (req, res) => {

    res.render('acercade');
});


app.listen(puerto, () => {
    console.log(`Escuchando el puerto ${puerto}`);
});