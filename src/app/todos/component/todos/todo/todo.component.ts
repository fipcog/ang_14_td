import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoFilter, Todolist, TodolistWithFilter } from 'src/app/core/models';

@Component({
  selector: 'td-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() todo!: TodolistWithFilter
  @Output() deleteTodo = new EventEmitter<string>()
  @Output() updateTodo = new EventEmitter<{ title: string, todoId: string }>()
  @Output() todoFilterChangedEmitter = new EventEmitter<{ filter: TodoFilter, todoId: string }>()

  updateTodoHandler(title: string) {
    this.updateTodo.emit({ title, todoId: this.todo.id })
  }

  deleteTodoHandler() {
    this.deleteTodo.emit(this.todo.id)
  }

  changeFilterHandler(filter: TodoFilter) {
    this.todoFilterChangedEmitter.emit({ filter, todoId: this.todo.id })
  }
}
