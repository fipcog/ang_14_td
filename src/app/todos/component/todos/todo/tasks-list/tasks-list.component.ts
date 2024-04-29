import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Complete } from 'src/app/core/enums/complete.enum';
import { Task, TodolistWithFilter, UpdateTask } from 'src/app/core/models';
import { TasksService } from 'src/app/todos/services/tasks.service';

@Component({
  selector: 'td-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  @Input() todo!: TodolistWithFilter

  tasks$!: Observable<Task[]>
  newTaskTitle = ''

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks(this.todo.id)

    this.tasks$ = this.tasksService.tasks$.pipe(map(
      dTasks => {
        let result = dTasks[this.todo.id]
        if (this.todo.filter === 'active') {
          result = result.filter(task => task.status !== Complete.done)
        }
        if (this.todo.filter === 'completed') {
          result = result.filter(task => task.status === Complete.done)
        }
        return result
      }
    ))
  }

  addTaskHandler() {
    if (this.newTaskTitle.length) {
      this.tasksService.addTask(this.todo.id, this.newTaskTitle)
      this.newTaskTitle = ''
    } else {
      alert('Task title should nit be ampty')
    }
  }

  deleteTaskHandler(taskId: string) {
    this.tasksService.deleteTask(this.todo.id, taskId)
  }

  updateTaskHandler(data: { model: UpdateTask, taskId: string }) {
    this.tasksService.updateTask(this.todo.id, data.taskId, data.model)
  }
}
