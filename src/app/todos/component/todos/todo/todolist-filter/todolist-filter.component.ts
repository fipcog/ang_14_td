import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoFilter } from 'src/app/core/models';

@Component({
  selector: 'td-todolist-filter',
  templateUrl: './todolist-filter.component.html',
  styleUrls: ['./todolist-filter.component.scss']
})
export class TodolistFilterComponent {
  @Input() todoFilter!: TodoFilter
  @Output() todoFilterChangedemitter = new EventEmitter()

  isAll = this.todoFilter === 'all'
  isActive = this.todoFilter === 'active'
  isCompleted = this.todoFilter === 'completed'

  changeFilterHandler(filter: TodoFilter) {
    this.todoFilterChangedemitter.emit(filter)
  }
}
