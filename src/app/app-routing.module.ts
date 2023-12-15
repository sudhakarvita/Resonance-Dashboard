import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',redirectTo:'mainpage',pathMatch:'full'},
  { path:'mainpage',component:MainpageComponent},
  { path:'dashboard',component:DashboardComponent, children:[
    {path:'profile',component:ProfileComponent},
    { path:'login',component:LoginComponent},
    { path:'home',component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
