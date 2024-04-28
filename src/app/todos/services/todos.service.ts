import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
import { BaseResponse, TodoFilter, Todolist, TodolistWithFilter } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos$ = new BehaviorSubject<TodolistWithFilter[]>([])

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todolist[]>(`https://social-network.samuraijs.com/api/1.1/todo-lists`)
      .pipe(map(
        todos => todos.map(td => {
          const result: TodolistWithFilter = { ...td, filter: 'all' }
          return result
        })
      ))
      .subscribe(
        (todos) => this.todos$.next(todos)
      )
  }

  createTodo(title: string) {
    return this.http.post<BaseResponse<{ item: Todolist }>>(`https://social-network.samuraijs.com/api/1.1/todo-lists`, { title })
      .pipe(map(res => {
        const currentState = this.todos$.getValue()
        const newTodo: TodolistWithFilter = { ...res.data.item, filter: 'all' }
        const result: TodolistWithFilter[] = [newTodo, ...currentState]
        return result
      }))
      .subscribe(
        todos => this.todos$.next(todos)
      )
  }

  updateTodo(data: { title: string, todoId: string }) {
    return this.http.put<BaseResponse<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${data.todoId}`, { title: data.title })
      .pipe(map(
        res => {
          const currentState = this.todos$.getValue()
          return currentState.map(td => td.id === data.todoId ? { ...td, title: data.title } : td)
        }
      ))
      .subscribe(todos => this.todos$.next(todos))
  }

  deleteTodo(todoId: string) {
    return this.http.delete<BaseResponse<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`)
      .pipe(map(res => {
        const currentState = this.todos$.getValue()
        return currentState.filter(td => td.id !== todoId)
      })
      )
      .subscribe(todos => this.todos$.next(todos))
  }

  changeTodoFilter(filter: TodoFilter, todoId: string) {
    const currentState = this.todos$.getValue()
    const newTodos = currentState.map(td => td.id === todoId ? { ...td, filter } : td)
    this.todos$.next(newTodos)
  }

}
