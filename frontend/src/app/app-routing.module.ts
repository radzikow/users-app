import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterLecturerComponent } from './components/register-lecturer/register-lecturer.component';
import { RegisterAdministrativeComponent } from './components/register-administrative/register-administrative.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-lecturer/:id', component: RegisterLecturerComponent },
  { path: 'register-administrative/:id', component: RegisterAdministrativeComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
