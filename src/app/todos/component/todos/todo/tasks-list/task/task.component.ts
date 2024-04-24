import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models';

@Component({
  selector: 'td-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task?: Task
  taskStatus!: boolean

  ngOnInit(): void {
    this.taskStatus = this.task?.status === 1 ? true : false
  }
}
