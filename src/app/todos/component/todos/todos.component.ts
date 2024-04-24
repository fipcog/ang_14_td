import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Observable } from 'rxjs';
import { Todolist } from 'src/app/core/models';

@Component({
  selector: 'td-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$!: Observable<Todolist[]>

  constructor(private todosService: TodosService) { }

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
}
