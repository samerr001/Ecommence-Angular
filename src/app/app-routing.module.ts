import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { PanierComponent } from './panier/panier.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component';

import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent ,canActivate:[RouteGuardService],data:{} },
  { path: 'login', component: LoginComponent ,canActivate:[RouteGuardService],data:{}},
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService],data: {}
},
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService],data: {role:["ROLE_USER"]} },
  { path: 'logout', component: LogoutComponent ,canActivate:[RouteGuardService]},
  { path : 'cart', component: PanierComponent, canActivate:[RouteGuardService],data: {}},
  { path : 'users', component: ListUsersComponent, canActivate:[RouteGuardService],data: {}},
  { path : 'addproduct', component: AjoutproduitComponent, canActivate:[RouteGuardService],data: {}},
  { path: '**', component: ErrorComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
