const express = require('express');
const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cors());
app.use(session({
    secret: 'bloglelo secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

const port = process.env.PORT || 3000;


const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully!');
});

app.listen(port, () => {
    console.log(`Server started listening at ${port}`);
});

const usersRouter = require('./routes/users');
const blogsRouter = require('./routes/blogs');

app.use('/users', usersRouter);
app.use('/blogs', blogsRouter);

app.get('/', (req, res) => {
    res.render('index', { title: 'HOME' });
});

