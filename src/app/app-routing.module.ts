import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChatComponent } from './chat/chat.component';
import { ComposeComponent } from './compose/compose.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeegridComponent } from './employeegrid/employeegrid.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HomeComponent } from './home/home.component';
import { HospitalComponent } from './hospital/hospital.component';
import { InboxComponent } from './inbox/inbox.component';
import { LoginComponent } from './login/login.component';
import { ReadComponent } from './read/read.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"analytics", component:AnalyticsComponent},
  {path:"hospital", component:HospitalComponent},
  {path:"login", component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"inbox", component:InboxComponent},
  {path:"compose",component:ComposeComponent},
  {path:"read", component:ReadComponent},
  {path:"employee", component:EmployeeComponent},
  {path:"employeeGrid", component:EmployeegridComponent},
  {path:"employeeList", component:EmployeelistComponent},
  {path:"chat", component:ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
