import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  // now: String = new Date().toLocaleString();

  constructor() { }
  now = new Date();
  private todoList: TodoItem[] = [
    { title: 'install NodeJS', completed: false },
    { title: 'install Angular CLI', completed: false },
    { title: 'create new app', completed: false },
    { title: 'serve app', completed: false },
    { title: 'develop app', completed: false },
    { title: 'deploy app', completed: false },
  ];
  getTodoList(): TodoItem[] {
    this.todoList.forEach(function (item) {
      item.timeBegin = new Date(2023 - Math.random() * 3, 2, 2);
    })
    return this.todoList;
  }
  addItem(item: TodoItem): void {

    item.timeBegin = new Date();
    console.log(item.timeBegin);
    console.log(item.timeBegin.getTime());
    this.todoList.push(item);
  }
  deleteItem(item, changes, changeTime): void {
    // const index = this.todoList.indexOf(item);
    // this.todoList.splice(index, 1);
    console.log(changeTime);
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes, ...changeTime };
    console.log(this.todoList[index].removed);
    const days= (this.todoList[index].timeRemove.getTime()-this.todoList[index].timeBegin.getTime())/(1000*3600*24);
    this.todoList[index].days= Math.round( days);
    console.log( this.todoList[index].days);







  }
  updateItem(item, changes): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
  }

}
