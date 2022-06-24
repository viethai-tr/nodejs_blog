const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const SortMiddleware = require('./app/middlewares/sortMiddleware');

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

app.use(methodOverride('_method'));

// Custom middlewares
app.use(SortMiddleware);

// GET POST DATA
app.use(express.json()); // to support JSON-encoded bodies
app.use(
    express.urlencoded({
        extended: true,
    }),
); // to support URL-encoded bodies

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

console.log('PATH: ', path.join(__dirname, 'resources', 'views'));

app.get('/middleware', 
    function(req, res, next) {
        if (['vethuong', 'vevip'].includes(req.query.ve)) {
            req.face = 'gach gach!';
            return next;
        }
        res.status(403).json({
            message: 'Access denied',
        });
    }, 

    function(req, res, next) {
        res.json({
            message: 'Successfully!',
            face: req.face,
        });
    }
);

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
