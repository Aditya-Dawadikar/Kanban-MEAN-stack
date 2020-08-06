import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardModalComponent } from './body/column/card-modal/card-modal.component';
import {BodyComponent} from '../app/body/body.component';
import {ColumnModalComponent}from  './body/column-modal/column-modal.component';
import {LoginComponent} from './login-signup/login/login.component';
import {SignupComponent} from './login-signup/signup/signup.component';
const routes: Routes = [
  {path:'kanban',component:BodyComponent},
  {path:'newcard',component:CardModalComponent},
  {path:'newcolumn',component:ColumnModalComponent},
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
