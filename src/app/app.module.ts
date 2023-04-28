import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './services/todo-list.service';
import { FinishManagerComponent } from './finish-manager/finish-manager.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TableModule } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { TagModule } from 'primeng/tag';
import { CustomDatePipe } from 'src/custom.datepipe';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
    FinishManagerComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoRoutingModule,
    TableModule,
    TagModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
