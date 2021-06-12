var express = require('express');
var router = express.Router();
var todos = require('./todos')

router.route('/')
.get(todos.getTodos)
.post(todos.createTodo) 

router.route('/:todoId')
.get(todos.getTodo)
.put(todos.updateTodo)
.delete(todos.deleteTodo)

module.exports = router;
