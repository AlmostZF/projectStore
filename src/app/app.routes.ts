import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { SingUpComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: InitialPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SingUpComponent
  }
];
