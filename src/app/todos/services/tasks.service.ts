import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { BaseResponse, DomainTasks, GetTasksResponse, Task } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks$ = new BehaviorSubject<DomainTasks>({})

  constructor(private http: HttpClient) { }

  getTasks(todoId: string) {
    this.http.get<GetTasksResponse>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}/tasks`)
      .pipe(map(
        res => res.items
      ))
      .subscribe(
        tasks => {
          const state = this.tasks$.getValue()
          state[todoId] = tasks
          this.tasks$.next(state)
        }
      )
  }

  addTask(todoId: string, title: string) {
    this.http.post<BaseResponse<{ item: Task }>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}/tasks`, { title })
      .pipe(map(
        res => res.data.item
      ))
      .subscribe(
        task => {
          const state = this.tasks$.getValue()
          const newState = { ...state, [todoId]: [task, ...state[todoId]] }
          this.tasks$.next(newState)
        }
      )
  }
}
