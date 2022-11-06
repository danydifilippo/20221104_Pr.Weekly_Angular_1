import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todolist: Todo[] = []
  todoDone: Todo[] = []

  constructor() { }

  taskEmpty = true
  id=1

  addTodo(id:number,title:string,completed:boolean) {
    this.taskEmpty = false
    id= this.id++
    completed=false
    this.todolist.push({id,title,completed})
  }


  checkTodo(i:number,obj:Todo){
    this.todolist[i].completed = !this.todolist[i].completed
    this.todoDone.push(obj)

  }

  removeTodo(obj:Todo){
    let index = this.todolist.indexOf(obj);
    this.todolist.splice(index,1)
    console.log(this.todolist);

  }

}
