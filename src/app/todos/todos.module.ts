import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './component/todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './component/todos/todo/todo.component';
import { AddTodoFormComponent } from './component/todos/add-todo-form/add-todo-form.component';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';
import { TasksListComponent } from './component/todos/todo/tasks-list/tasks-list.component';
import { TaskComponent } from './component/todos/todo/tasks-list/task/task.component';
import { TodolistFilterComponent } from './component/todos/todo/todolist-filter/todolist-filter.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    AddTodoFormComponent,
    TasksListComponent,
    TaskComponent,
    TodolistFilterComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule,
    FormsModule,
    ShareModule,
  ]
})
export class TodosModule { }
