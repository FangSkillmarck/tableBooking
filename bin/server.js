'strict mode';

var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
var path = require('path');
var hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, '../views/'));

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());
app.use(session({
    secret: 'finn',
    saveUninitialized: false,
    resave: false
}));

app.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Welcome, please fill out form',
        success: req.session.success,
        errors: req.session.errors
    });
    req.session.errors = null;
});

const { check, validationResult } = require('express-validator');

app.post('/submit',  [
    check('firstName')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email', 'Email is required')
        .isEmail(),
], (req, res) => {
    console.log(req.body);
    var errors = validationResult(req).array();
        if (errors) {
            req.session.errors = errors;
            req.session.success = false;
        } else {
            req.session.success = true;
            res.render('success', {
                title: 'Thanks for submitting form',
                data: req.body
            });
        }
 
});

app.use('/static', serveStatic(path.resolve(__dirname, '../static/')));

app.listen(8080, function () {
    console.log('http server running at http://localhost:8080/');
});
