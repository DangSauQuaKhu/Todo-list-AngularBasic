import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
import { Route, Router } from '@angular/router';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-list-manager',
  templateUrl: "./list-manager.component.html"
  , styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  @Input() todoList: TodoItem[];
  
  constructor(private todoListService: TodoListService,private route: Router ) {
    
  }

  ngOnInit() {
  
  }
  title = 'todo-list';

  addItem(value: string): void {
    // console.log(value);
    if (value != '')
      this.todoListService.addItem({ title: value, completed: false, removed: false });
  }
  removeItem(item, changes, changeTime): void {
    this.todoListService.deleteItem(item, changes, changeTime);
  }
  updateItem(item, changes): void {
    this.todoListService.updateItem(item, changes);
  }
  // changeListFinish(): void {
  //   this.finishChecked = false;
  //   console.log(this.finishChecked);


  // }
  // changeListHome(): void{
  //   this.finishChecked = true;
  //   console.log(this.finishChecked);

  // }

}
