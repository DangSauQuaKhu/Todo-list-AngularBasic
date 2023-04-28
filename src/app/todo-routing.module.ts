import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { FinishManagerComponent } from './finish-manager/finish-manager.component';


const routes: Routes =[
 

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class TodoRoutingModule { }
