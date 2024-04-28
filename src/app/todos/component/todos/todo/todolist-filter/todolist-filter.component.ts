import { Component } from '@angular/core';
import { TodosService } from 'src/app/todos/services/todos.service';

@Component({
  selector: 'td-todolist-filter',
  templateUrl: './todolist-filter.component.html',
  styleUrls: ['./todolist-filter.component.scss']
})
export class TodolistFilterComponent {
  constructor(private todosSetvice: TodosService) { }

  changeFilterHandler() {

  }
}
