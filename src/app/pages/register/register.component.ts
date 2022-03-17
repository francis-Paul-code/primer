import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  private authStatus = false;
  registryform = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  loginform = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private authservice: AuthService
  ) {}

  ngOnInit() {}
  async handleRegister () {
    this.authservice.register(this.registryform.value).subscribe((res) => {
      console.log(res);
    });
  }
  handleLogin() {
    this.authservice.login(this.loginform.value).subscribe({
      next: (res) => {
        this.router.navigateByUrl('home')
      },
      error: (error) => {
        alert('login failed');
      },
    });
  }
}
