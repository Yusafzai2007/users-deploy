import { Routes } from '@angular/router';
import { Login } from './user/login/login';
import { Signup } from './user/signup/signup';
import { Users } from './user/users/users';



export const routes: Routes = [

  
  {
    path:"",
    component:Login
  },
  {
    path:"signup",
    component:Signup
  },
  {
    path:"user",
    component:Users
  },

   {
    path:"login",
    component:Login
  },


];
