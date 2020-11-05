import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppServiceService } from './app-service.service';
import { MatTableModule } from '@angular/material/table';

import { AutomaticComponent } from './modules/automatic/automatic.component';
import { AboutComponent } from './modules/about/about.component';
import { ChildComponent } from './modules/child/child.component';
import { ParentComponent } from './modules/parent/parent.component';
import { MyserviceService } from './service/myservice.service';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { LoginServiceService } from './service/login-service.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AutomaticComponent,
    AboutComponent,
    ChildComponent,
    ParentComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [AppServiceService, MyserviceService, LoginServiceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
