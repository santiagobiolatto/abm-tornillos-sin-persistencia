const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./routes/router');
const path = require('path');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use(router);

//Server start
app.listen(app.get('port'), ()=> {
    console.log(`Server listen on port ${app.get('port')}`);
});