import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';
import axios from 'axios';

@Component({
  selector: 'app-edit-todos-component',
  templateUrl: './edit-todos-component.component.html',
  styleUrls: ['./edit-todos-component.component.css'],
  inputs : ['todo']
})
export class EditTodosComponentComponent implements OnInit {

  public todo : Todo;
  public description : String;
  public error : String = '';
  public close : string = null;

  // public changed : boolean = false;
  // @Output() changedesc: EventEmitter<any> = new EventEmitter();
  
  
  constructor() { }

  ngOnInit(): void {

    this.description = this.todo.description ;
    // console.log(this.description);
    // console.log(this.todo);
  }

   edit_todo(){

    if(this.description === ''){
      this.error = "Description can'be empty";
      this.description = '';
      this.close = null;
      return;
    }
    this.close = "modal";
    
    axios.put(`http://localhost:3000/todos/todo/${this.todo.todo_id}`, {

      description : this.description

    }).then(
      (response) =>{
       
        // this.todo.description = response.data.description;
        this.description = response.data.description;
        this.todo.description = this.description;
       
        this.error = "";
        // console.log(response.data);

        //event emitter
        // this.changed = true;
        // if(this.changed && this.description){
        //   // console.log(this.description);
        //   this.changedesc.emit(this.todo);
        // }
      });

  }

  retrieve_old_data(){
    this.description = this.todo.description;
    this.error = "";
  }



}
