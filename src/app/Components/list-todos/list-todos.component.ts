import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Todo from 'src/app/todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todo: Todo[] = [{
    id: 0,
    title: "",
    description: "",
    active: true
  }];
  sl = 1;
  @Input() Todos: Todo[] = new Input();
  @Output() onDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteClick(todo: Todo) {
    console.log('onDeleteClick Triggered')
    this.onDelete.emit(todo);
  }


}
