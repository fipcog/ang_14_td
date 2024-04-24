export interface Todolist {
  addedDate: string
  id: string
  order: number
  title: string
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