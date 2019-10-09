import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

import {ListComponent} from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path:'',pathMatch:'full', component:HomeComponent},
  {path:'list',component:ListComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'delete/:id', component:DeleteComponent},
  {path:'view/:id', component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
