const express = require('express');
const cors = require('cors');
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

const port = process.env.PORT || 3000;


const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully!');
});

app.listen(port, () => {
    console.log(`Server started listening at ${port}`);
});

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.render('index', { title: 'HOME' });
});

app.get('/blogs', (req, res) => {
    res.render('blogspage', { title : "BLOGS" });
});
