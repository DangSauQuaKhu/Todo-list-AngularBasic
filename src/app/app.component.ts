import { Component } from '@angular/core';
import { TodoListService } from './services/todo-list.service';

@Component({
  selector: 'app-root',
  template:
  `
  <section class="container">
  <div class="heading">
  <img class="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg">
  <h1 class="heading__title">To-Do List</h1>
</div>
<app-list-manager></app-list-manager>
</section>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list';
  
}
