import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/session.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefaultLoginComponent } from '../../components/login/default-login.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
interface UserLogin {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginComponent, ReactiveFormsModule,
    PrimaryInputComponent ],
  exportAs: 'app-Login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;

  constructor(
    private session: SessionService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
  }

  login(){
    this.session.login(this.loginForm.value).subscribe({
      next: (response) => {
        alert(response.message);
        this.router.navigate([""]);
      },
      error: (error) => {
        alert(error.error.message);
      }
    })
  }

  navigate(){
    this.router.navigate(["/signup"]);
  }


}
