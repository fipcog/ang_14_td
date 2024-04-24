import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Task } from 'src/app/core/models';
import { TasksService } from 'src/app/todos/services/tasks.service';

@Component({
  selector: 'td-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  @Input() todoId = ''

  tasks$!: Observable<Task[]>
  newTaskTitle = ''

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks(this.todoId)

    this.tasks$ = this.tasksService.tasks$.pipe(map(
      dTasks => dTasks[this.todoId]
    ))
  }

  addTaskHandler() {
    if (this.newTaskTitle.length) {
      this.tasksService.addTask(this.todoId, this.newTaskTitle)
      this.newTaskTitle = ''
    } else {
      alert('Task title should nit be ampty')
    }
  }
}
