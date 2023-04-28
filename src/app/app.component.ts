import { Component, OnInit } from '@angular/core';
import { TodoListService } from './services/todo-list.service';
import { TodoItem } from './interfaces/todo-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todo-list';
  todoList: TodoItem[];
  finishChecked = false;
  changeList(): void {
    this.finishChecked = !this.finishChecked;
    console.log(this.finishChecked);


  }
  constructor(private router: Router,private todoListService: TodoListService) {}
  ngOnInit(): void {
      this.todoList= this.todoListService.getTodoList();
  }
  isHomeRoute() {
    return this.router.url === '/home';
  }
}
