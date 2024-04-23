import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { BaseResponse, Todolist } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos$ = new BehaviorSubject<Todolist[]>([])

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todolist[]>(`https://social-network.samuraijs.com/api/1.1/todo-lists`)
      .subscribe(
        (todos) => this.todos$.next(todos)
      )
  }

  createTodo(title: string) {
    return this.http.post<BaseResponse<{ item: Todolist }>>(`https://social-network.samuraijs.com/api/1.1/todo-lists`, { title })
      .pipe(map(res => {
        const currentState = this.todos$.getValue()
        const newTodo = res.data.item
        return [newTodo, ...currentState]
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

}
