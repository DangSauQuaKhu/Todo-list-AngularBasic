import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

 
  constructor() {}
  private todoList: TodoItem[] = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];
  getTodoList(): TodoItem[] {
    return this.todoList;
  }
  addItem(item: TodoItem): void {
    console.log(item.title);
    this.todoList.push(item);
  }
  deleteItem(item: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    
  }
  updateItem(item,changes): void{
    const index = this.todoList.indexOf(item);
    this.todoList[index] = {...item, ...changes};
  }
}
