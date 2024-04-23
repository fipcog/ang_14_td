import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './component/todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './component/todos/todo/todo.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule,
  ]
})
export class TodosModule { }
