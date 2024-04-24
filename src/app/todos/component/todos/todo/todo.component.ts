import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todolist } from 'src/app/core/models';

@Component({
  selector: 'td-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo!: Todolist
  @Output() deleteTodo = new EventEmitter<string>()
  @Output() updateTodo = new EventEmitter<{ title: string, todoId: string }>()

  constructor() { }

  ngOnInit(): void {

  }

  updateTodoHandler(title: string) {
    this.updateTodo.emit({ title, todoId: this.todo.id })
  }

  deleteTodoHandler() {
    this.deleteTodo.emit(this.todo.id)
  }
}
