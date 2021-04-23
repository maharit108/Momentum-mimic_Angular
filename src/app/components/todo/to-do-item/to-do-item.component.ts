import { TodoService } from '../../../services/todo_Api/todo.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../../models/Todos'

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input()
  todo!: Todo;

  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter()

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  //setting class
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }

    return classes;
  }

  onToggle(todo:Todo) {
    todo.completed = !todo.completed
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))
  }

  onDelete(todo:Todo) {
    this.deleteTodo.emit(todo)
  }

}
