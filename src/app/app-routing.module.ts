import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishManagerComponent } from './finish-manager/finish-manager.component';
import { ListManagerComponent } from './list-manager/list-manager.component';

const routes: Routes = [ { path: '',   redirectTo: '/home', pathMatch: 'full' },
{path:'finish-list',component: FinishManagerComponent},
{path:'home',component: ListManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
