const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'hbs');


let tasks = [];

app.get('/', (req,res) => {

    res.render('home',{
        title: 'To-Do List',
        tasks
    });
});

app.post('/', (req, res) => {
    tasks.push(req.body.newtask);
    res.redirect('/');
});

app.listen(5555,() => {
    console.log('server started at http://localhost:5555');
});