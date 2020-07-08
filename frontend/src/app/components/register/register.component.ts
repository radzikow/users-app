import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public error = null;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRegister(form: NgForm): void {
    const newUser: User = {
      id: null,
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      password: form.value.password,
      password_confirmation: form.value.password_confirmation,
      type: form.value.type,
      status: 0
    }
    this.auth.register(newUser).subscribe(
      res => this.handleResponse(res),
      err => this.handleError(err)
    );
  }

  handleResponse(res): void {
    if(res.user.type == 'Lecturer') {
      this.router.navigate(['/register-lecturer', res.user.id ]);
    } else {
      this.router.navigate(['/register-administrative', res.user.id ]);
    }
  }

  handleError(err): void {
    this.error = err.error.errors;
  }

}
