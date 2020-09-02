const express = require('express');
const router = express.Router();
const pool = require('./db');


//get all todos
router.get('/todos' , async(req, res) => {

    try {
        const todos = await pool.query('select * from todos_table');
        res.json(todos.rows);
        
    } catch (error) {

        res.send(error.message);
        
    }
    
});

//get a todo
router.get('/todo/:id' , async(req, res)=>{

    try {

        const {id} = req.params;
        const todo = await pool.query('select * from todos_table where todo_id = $1', [
            id
        ]);
        res.json(todo.rows[0]);
        
    } catch (error) {

        res.send(error.message);
        
    }
   
});

//create a todo
router.post('/todo' , async(req, res)=>{

    try {

        const description  = req.body.description;
        const newTodo = await pool.query('insert into todos_table( description ) values ($1) returning *' , [
        description
        ]);
        res.json(newTodo.rows[0]);
        
    } catch (error) {

        res.send(error.message);
        
    }
    
});

// update a todo

router.put('/todo/:id' , async(req, res)=>{

    try {

        const description = req.body.description;
        const id = req.params.id;
        const updated_todo = await pool.query('update todos_table set description = $1 where todo_id = $2 returning *', [
            description,
            id
        ]);
        res.json(updated_todo.rows[0]);
        
    } catch (error) {

        res.send(error.message);
        
    }
  
});

//delete aa todo
router.delete('/todo/:id' , async(req, res)=>{

    try {

        const { id } = req.params;
        const delete_todo = pool.query('delete from todos_table where todo_id = $1' , [
            id
        ]);
        res.json('todo is deleted');

    } catch (error) {

        res.send(error.message);
        
    }
});

module.exports =  router;
