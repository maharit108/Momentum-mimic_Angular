import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos'

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos: Todo[] = [];
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe(todos => {
      this.todos = todos
    })
  }

  deleteTodoParent(todo:Todo) {
    //remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id)
    // make call to service to remove from backend
    this.todoService.deleteTodo(todo).subscribe()
  }

  addTodo(todo:any) {
    const payload = {
      ...todo, id: this.todos.length + 1
    }
    this.todoService.addTodo(payload).subscribe(payload => {
      this.todos.push(payload)
    })
  }

}
