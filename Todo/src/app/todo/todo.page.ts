import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/todos.service';
import { Todo } from '../interfaces/todo';

@Component({
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss']
})
export class TodoPage implements OnInit {

  todos: Todo[] =[]

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todos = this.todosService.todolist;
    this.taskEmpty = this.todosService.taskEmpty;
  }
  text = ''
  message = 'Recupero Task..';
  messageDelay = false;
  taskEmpty = true;

  addTodo(a:any,b:any,c:any){
    this.messageDelay=true
    this.taskEmpty=false
    setTimeout(() => {
      this.todosService.addTodo(a,b,c);
      this.messageDelay=false
    }, 2000);
  }


  checkTodo(i:number,obj:Todo): void{
    this.messageDelay=true
    setTimeout(() => {
      this.todosService.checkTodo(i,obj);
      this.messageDelay=false
    }, 2000);

  }

  removeTodo(obj:Todo): void {
    this.messageDelay=true
    setTimeout(() => {
      this.todosService.removeTodo(obj);
    }, 2000);
    console.log(this.todos);

  }
}
