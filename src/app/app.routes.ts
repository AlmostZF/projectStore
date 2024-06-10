import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: HeaderComponent,
    children: [
      {path: 'home', component: InitialPageComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'signup',component: SignUpComponent}
];
