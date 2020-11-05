import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomaticComponent } from './modules/automatic/automatic.component';
import { AboutComponent } from './modules/about/about.component';
import { ParentComponent } from './modules/parent/parent.component';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { ChildComponent } from './modules/child/child.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'automatic', component: AutomaticComponent },
  { path: 'about', component: AboutComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  {path: 'child', component: ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
