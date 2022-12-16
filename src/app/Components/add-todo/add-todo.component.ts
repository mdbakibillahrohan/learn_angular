import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Todo from 'src/app/todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor() { }

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {
  }
  onSubmit(formData: any) {
    this.addTodo.emit(formData);
  }

}
