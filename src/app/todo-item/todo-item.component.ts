import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">
  <input type="checkbox"  
  class="todo-checkbox"
  (click)="completeItem()"
  [checked]="this.item.completed"/> 
  <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
  {{ item.title }}
  </span>
  <button class="btn btn-red" (click)="removeItem()">
  remove
  </button>
  </div>
  `,
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() item: TodoItem;

  constructor() {}

  ngOnInit() {}
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  removeItem(): void {
    this.remove.emit(this.item);
  }
  completeItem(): void {
   this.update.emit(
    {
      item: this.item,
      changes: {completed: !this.item.completed}
    }
   );
  }
}
