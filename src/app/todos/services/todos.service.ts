import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todolist } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos$ = new BehaviorSubject<Todolist[]>([])

  constructor(private http: HttpClient) { }

  getTodos() {
    this.http.get<Todolist[]>(`https://social-network.samuraijs.com/api/1.1/todo-lists`).subscribe(
      (todos) => this.todos$.next(todos)
    )
  }

}
