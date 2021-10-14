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

app.enable('view cache');

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
        showTitle: true,
        success: req.session.success,
        errors: req.session.errors
    });
    req.session.errors = null;
});

const { check, validationResult } = require('express-validator');
app.post('/submit',  [
    check('firstName').trim()
        .isLength({ min: 1 }).escape()
        .withMessage('firstName is required')
        .isAlpha().withMessage('Name must be alphabet letters.'),
    check('lastName').trim()
        .isLength({ min: 1 }).escape()
        .withMessage('lastName is required')
        .isAlpha().withMessage('Name must be alphabet letters.'),
    check('amount',' Number of persons is required, max 20').trim()
        .isLength({ min: 1 }).escape()
        .isInt(),
    check('phoneNumber').trim()
        .isLength({ min: 1 })
        .isMobilePhone()
        .withMessage('phoneNumber is required'),
    check('arrival').trim()
        .not()
        .isEmpty()
        .withMessage('arrival is required'),
    check('departure').trim()
        .not()
        .isEmpty()
        .withMessage('departure is required'),
    check('mail',"email is required").trim()
    .isEmail()],
    (req, res) => {
    console.log(req.body);
    const { firstName,lastName,amount, mail,arrival,departure, phoneNumber } = req.body
     var errors =  validationResult(req).array();
     console.log("errors", errors);
    if (!errors) { 
        req.session.success = true;
                res.render('success', {
                    title: 'Thanks for submitting form',
                    showTitle: true,
                    data: req.body
        });
    } else {
        title= 'Can not submit form',
        req.session.errors = validationResult(req).array();
        req.session.success = false;
        console.log("errors", errors);
    }
});


app.use('/static', serveStatic(path.resolve(__dirname, '../static/')));

app.listen(8080, function () {
    console.log('http server running at http://localhost:8080/');
});
