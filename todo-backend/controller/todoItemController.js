
const TodoItem = require('../models/todoItems');
exports.createTodoItems =async (req,res)=>{
    const {task,date} = req.body;
    console.log(req.body);
    const todoItem = new TodoItem({task,date});
    await todoItem.save();
    res.status(201).json({todoItem})
}

exports.getTodoItems = async (req,res)=>{
    const todoItems = await TodoItem.find()
    res.json(todoItems);
} 

exports.deleteTodoItem = async (req,res)=>{
    const {id} = req.params;
    await TodoItem.findByIdAndDelete(id)
    res.status(204).json({_id:id});
} 

exports.markCompleted = async (req,res)=>{
    const {id} = req.params;
    const todoItem = await TodoItem.findById(id)
    todoItem.complete = true;
    res.json({_id:id});
}

