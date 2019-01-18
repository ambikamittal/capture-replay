const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const screenshotsRoutes = express.Router(); 	
const PORT = 4000;

let Screenshots = require('./screenshots.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/screenshots', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

screenshotsRoutes.route('/').get(function(req, res) {
    Screenshots.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

/*screenshotsRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Screenshots.findById(id, function(err, todo) {
        res.json(todo);
    });
});*/

/*todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});*/

screenshotsRoutes.route('/add').post(function(req, res) {
    let screenshot = new Screenshots(req.body);
    screenshot.save()
        .then(screenshot => {
            res.status(200).json({'screenshot': 'screenshot added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new screenshot failed');
        });
});

app.use('/screenshots', screenshotsRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
}); 