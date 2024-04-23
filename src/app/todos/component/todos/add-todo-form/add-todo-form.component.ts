import { Component } from '@angular/core';
import { TodosService } from './../../../services/todos.service';

@Component({
  selector: 'td-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss']
})
export class AddTodoFormComponent {

  newTitle = ''

  constructor(private todoService: TodosService) { }

  addNewTodo() {
    this.todoService.createTodo(this.newTitle)
    this.newTitle = ''
  }

}
