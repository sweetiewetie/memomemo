var Todo = require('../models/Todo');

exports.getTodos = function (req, res) {
  Todo.find({userid : req.session.userId}).populate('userid')
    .then(function (todos) {

      // console.log(todos);
      res.json(todos);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.createTodo = function (req, res) {
  Todo
    .create({...req.body, userid: req.session.userId})
    .then(function (newTodo) {
      // console.log(newTodo)
      res.status(201).json(newTodo);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.getTodo = function (req, res) {
  Todo.find({ _id: req.params.todoId })
    .then(function (foundTodo) {
      res.json(foundTodo);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.updateTodo = function (req, res) {
  Todo
    .findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
    .then(function (todo) {
      res.json(todo);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.deleteTodo = function (req, res) {
  Todo
    .deleteMany({ _id: req.params.todoId })
    .then(function () {
      res.json({ message: 'Deleted' });
    })
    .catch(function (err) {
      res.send(err);
    });
};


module.exports = exports;