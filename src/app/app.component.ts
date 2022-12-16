import { Component } from '@angular/core';
import Todo from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'larn';
  user: any = {};
  Todos: Todo[] = [
    {
      id: 1,
      title: "Rohan",
      description: "aksfjadlksjf;sajd fl;",
      active: true,
    }
  ];

  addTodo(todo: any) {
    todo = { ...todo, id: this.Todos.length }
    this.Todos.push(todo);
  }

  onDelete(todo: any) {
    let index = this.Todos.indexOf(todo);
    this.Todos.splice(index, 1);
  }
}
