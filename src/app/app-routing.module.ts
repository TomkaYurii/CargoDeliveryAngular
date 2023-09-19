import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { UserComponent } from './Components/user/user.component';
import { AdminComponent } from './Components/admin/admin.component';

const routes: Routes = [
  {
    path: 'SignIn',
    component: LoginComponent,
  },
  {
    path: 'SignUp',
    component: RegisterComponent,
  },
  {
    path: 'User',
    component: UserComponent,
    data: {
      role: ['User','Admin'],
    },
  },
  {
    path: 'Admin',
    component: AdminComponent,
    data: {
      role: ['Admin'],
    },
  },

  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, // redirect to Home component on root path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
