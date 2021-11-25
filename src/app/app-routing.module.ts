import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
{ path : "view" , component : ViewComponent},
{ path : "login" , component : LoginComponent},
{ path : "register", component : RegisterComponent},
{ path : "" ,redirectTo : "/login",pathMatch:"full"},
//{path:"",component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
