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
    this.updateTaskPatch({ title })
  }

  updateTaskStatusHandler(e: Event) {
    this.updateTaskPatch({ status: (e.currentTarget as HTMLInputElement).checked ? Complete.done : Complete.inProcess })
  }

  updateTaskPatch(patch: Partial<UpdateTask>) {
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
      model: { ...baseModel, ...patch },
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
