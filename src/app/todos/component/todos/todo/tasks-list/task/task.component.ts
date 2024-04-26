import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Complete } from 'src/app/core/enums/complete.enum';
import { Task, UpdateTask } from 'src/app/core/models';

@Component({
  selector: 'td-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task
  @Output() updateTask = new EventEmitter<{ model: UpdateTask, taskId: string }>()
  @Output() deleteTask = new EventEmitter<string>()

  complete = Complete

  updateTaskTitleHandler(title: string) {
    const baseModel: UpdateTask = {
      completed: this.task.completed,
      deadline: this.task.deadline,
      description: this.task.description,
      priority: this.task.priority,
      startDate: this.task.startDate,
      status: this.task.status,
      title: this.task.title
    }
    this.updateTask.emit({
      model: { ...baseModel, title },
      taskId: this.task.id
    })
  }

  updateTaskStatusHandler(e: Event) {
    const baseModel: UpdateTask = {
      completed: this.task.completed,
      deadline: this.task.deadline,
      description: this.task.description,
      priority: this.task.priority,
      startDate: this.task.startDate,
      status: this.task.status,
      title: this.task.title
    }
    this.updateTask.emit({
      model: { ...baseModel, status: (e.currentTarget as HTMLInputElement).checked ? Complete.done : Complete.inProcess },
      taskId: this.task.id
    })
  }

  deleteTaskHandler() {
    this.deleteTask.emit(this.task?.id)
  }

  getNewTaskTitle(title: string) {
    this.updateTaskTitleHandler(title)
  }
}
