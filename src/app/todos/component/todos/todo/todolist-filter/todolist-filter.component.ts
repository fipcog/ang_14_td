import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoFilter } from 'src/app/core/models';

@Component({
  selector: 'td-todolist-filter',
  templateUrl: './todolist-filter.component.html',
  styleUrls: ['./todolist-filter.component.scss']
})
export class TodolistFilterComponent {
  @Input() todoFilter!: TodoFilter
  @Output() todoFilterChangedEmitter = new EventEmitter<TodoFilter>()

  changeFilterHandler(filter: TodoFilter) {
    this.todoFilterChangedEmitter.emit(filter)
  }

}
