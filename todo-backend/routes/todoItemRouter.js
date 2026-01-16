const express = require('express');
const todoItemRouter = express.Router();
const todoItemController = require('../controller/todoItemController');

todoItemRouter.get('/',todoItemController.getTodoItems);
todoItemRouter.post('/',todoItemController.createTodoItems);
todoItemRouter.delete('/:id',todoItemController.deleteTodoItem);
todoItemRouter.put('/:id/completed',todoItemController.markCompleted);

module.exports = todoItemRouter;