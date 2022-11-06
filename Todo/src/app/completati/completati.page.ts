import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/todos.service';
import { Todo } from '../interfaces/todo';

@Component({
  templateUrl: './completati.page.html',
  styleUrls: ['./completati.page.scss']
})
export class CompletatiPage implements OnInit {

  todosDone: Todo[] = []

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todosDone = this.todoService.todoDone
  }



}
