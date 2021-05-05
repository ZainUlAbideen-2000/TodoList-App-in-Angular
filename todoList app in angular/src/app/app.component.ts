import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todos List';
  todos =[
    { 
      label: 'Perform lab on time',
      done: false, 
      priority: 3 
    },
    { 
      label: 'Project due on 26th',
      done: true, 
      priority: 1 
    },
    { 
      label: 'Study at night',
      done: false, 
      priority: 2 
    },
    { 
      label: 'Assignments due on weekend',
      done: false, 
      priority: 5 
    },
  ]; 


  addTodo(newTodoLabel:any) {
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo:any) {
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }
}
