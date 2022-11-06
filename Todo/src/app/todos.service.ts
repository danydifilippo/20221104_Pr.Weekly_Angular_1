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

  removeTodo(a:any) {
      this.todolist.filter(i=>i.id !==a.id);
  }

  checkTodo(i:number,obj:Todo){
    this.todolist[i].completed = !this.todolist[i].completed
    this.todoDone.push(obj)
    console.log(this.todoDone);

  }

}
