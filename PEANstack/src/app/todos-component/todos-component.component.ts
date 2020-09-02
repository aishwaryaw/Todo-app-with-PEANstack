import { Component, OnInit, OnChanges } from '@angular/core';
import axios from 'axios';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos-component',
  templateUrl: './todos-component.component.html',
  styleUrls: ['./todos-component.component.css']
})

export class TodosComponentComponent implements OnInit {

  constructor() { }

  public description : string;
  public todos = [];
  public todo : Todo = {
    todo_id : '',
    description : null
  };
  
   

  ngOnInit(): void {

    axios.get('http://localhost:3000/todos/todos').then((response)=>{
      this.todos = response.data;
    });
    
  }


  create_todo(){

    axios.post('http://localhost:3000/todos/todo' , {
      description : this.description
    }).then((todo) => {
     
      this.todo.todo_id = todo.data.todo_id;
      this.todo.description = todo.data.description;
      this.todos.push(Object.assign({} , this.todo));
    });
    console.log(this.todos)
    this.description = '';

  }

delete_todo(id){
  console.log(this.todos);
  axios.delete(`http://localhost:3000/todos/todo/${id}`).then(
    (response) =>{
     this.todos = this.todos.filter(function(todo){
        return todo.todo_id !== id
      });
      console.log(this.todos);
    }
  );
}

changeDescription(todo:any){

  // console.log(description);
 // this.todo = todo;
}


}
