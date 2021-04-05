import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todos'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoUrl:string = 'https://jsonplaceholder.typicode.com/todos'
  toDosLimit:string = '?_limit=5'

  constructor(private http:HttpClient) { }

  // get Todos
  getTodo():Observable<Todo[]> {
   return this.http.get<Todo[]>(`${this.toDoUrl}${this.toDosLimit}`)
  }

  //When toggle Completed
  toggleCompleted(todo:Todo):Observable<any> {
    const url: string = `${this.toDoUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }

  // Delete todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url: string = `${this.toDoUrl}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions)
  }

  // Add todo
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.toDoUrl, todo, httpOptions)
  }
}
