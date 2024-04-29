import { FormControl } from "@angular/forms"

export interface Todolist {
  addedDate: string
  id: string
  order: number
  title: string
}

export type TodoFilter = 'all' | 'active' | 'completed'

export interface TodolistWithFilter {
  addedDate: string
  id: string
  order: number
  title: string
  filter: TodoFilter
}

export interface BaseResponse<T = {}> {
  resultCode: number
  messages: string[],
  data: T
}

export interface Task {
  description: string
  title: string
  completed: boolean
  status: number
  priority: number
  startDate: Date
  deadline: Date
  id: string
  todoListId: string
  order: number
  addedDate: Date
}

export interface DomainTasks {
  [key: string]: Task[]
}

export interface GetTasksResponse {
  items: Task[]
  totalCount: number
  error: string
}

export interface UpdateTask {
  title: string
  description: string
  completed: boolean
  status: number
  priority: number
  startDate: Date
  deadline: Date
}

export interface LoginForm {
  email: FormControl<string>
  password: FormControl<string>
  rememberMe: FormControl<boolean>
}