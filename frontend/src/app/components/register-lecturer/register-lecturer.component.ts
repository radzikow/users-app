import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Observable } from 'rxjs';
import { Lecturer } from 'src/app/interfaces/lecturer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-lecturer',
  templateUrl: './register-lecturer.component.html',
  styleUrls: ['./register-lecturer.component.scss']
})
export class RegisterLecturerComponent implements OnInit {

  public error = null;
  private userId = parseInt(this.route.snapshot.paramMap.get('id'));

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onRegisterLecturer(form: NgForm): void {
    const lecturer: Lecturer = {
      id: this.userId,
      phone: form.value.phone,
      education: form.value.education,
      status: 1
    }
    this.auth.registerLecturer(lecturer).subscribe(
      res => this.handleResponse(res),
      err => this.handleError(err)
    );
  }

  handleResponse(res): void {
    this.router.navigate(['/login', { email: res.lecturer.email, name: res.lecturer.firstname }]);
  }

  handleError(err): void {
    this.error = err.error.errors;
  }

}
