import { Component, Input, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { TodoItem } from '../interfaces/todo-item';
import { TableModule } from 'primeng/table';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finish-manager',
  templateUrl: './finish-manager.component.html',
  styleUrls: ['./finish-manager.component.css']
})
export class FinishManagerComponent implements OnInit {
   @Input() todoList: TodoItem[];
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    
  }
  

}
