const { response } = require('express');
const express = require('express'); //importacao express

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes); //middleware 2

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
