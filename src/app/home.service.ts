import { Injectable } from '@angular/core';
import { Init } from './home/init';
@Injectable({
  providedIn: 'root'
})
export class HomeService extends Init {


  constructor() {
    super();
    console.log('TodoService Works');
    this.load();
  }

  getTodos() {
    let todos = JSON.parse(localStorage.getItem('todos')!);
    return todos;
  }

  addTodo(newTodo: any) {
    let todos = JSON.parse(localStorage.getItem('todos')!);
    // Add New TodoService
    todos.push(newTodo);
    // Set New Todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todoText: any) {
    let todos = JSON.parse(localStorage.getItem('todos')!);

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].NAME == todoText) {
        todos.splice(i, 1);
      }
    }
    // Set New Todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(oldText: any, newText: any) {
    let todos = JSON.parse(localStorage.getItem('todos')!);

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].STUDENT_ID == oldText.STUDENT_ID) {
        todos[i] = newText;
      }
    }
    // Set New Todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
