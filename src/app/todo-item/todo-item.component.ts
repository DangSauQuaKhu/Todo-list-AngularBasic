import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: "./todo-item.component.html",
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() item: TodoItem;

  constructor() { }

  ngOnInit() { }
  now = new Date();
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  removeItem(): void {

    this.remove.emit(
      {
        item: this.item,
        changes: { removed: !this.item.removed },
        changeTime: { timeRemove: this.now }
      });
     

  }
  completeItem(): void {
    this.update.emit(
      {
        item: this.item,
        changes: { completed: !this.item.completed }
      }
    );
  }
}
