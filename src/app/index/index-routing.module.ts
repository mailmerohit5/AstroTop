import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';
import { IndexGuard } from '../guards/index.guard';

const routes: Routes = [
  {
    path: '',
    //canActivate: [IndexGuard], 
    component: IndexPage, 
    children:[
      {
        path :'',          
        loadChildren: () => import('../pages/welcome/welcome.module').then( m => m.WelcomePageModule)
       },      
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'forget-password',
        loadChildren: () => import('../pages/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('../pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
      },
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
