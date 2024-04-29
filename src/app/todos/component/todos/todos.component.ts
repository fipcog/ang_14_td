import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Observable } from 'rxjs';
import { TodoFilter, Todolist, TodolistWithFilter } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'td-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$!: Observable<TodolistWithFilter[]>

  constructor(
    private todosService: TodosService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.todos$ = this.todosService.todos$

    this.todosService.getTodos()
  }

  updateTodoHandler(data: { title: string; todoId: string; }) {
    this.todosService.updateTodo(data)
  }

  deleteTodoHandler(todoId: string) {
    this.todosService.deleteTodo(todoId)
  }

  changeFilterHandler(data: { filter: TodoFilter, todoId: string }) {
    this.todosService.changeTodoFilter(data.filter, data.todoId)
  }

  logoutHandler() {
    this.authService.logout()
  }
}
