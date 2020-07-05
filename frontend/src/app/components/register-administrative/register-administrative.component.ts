import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Observable } from 'rxjs';
import { Administrative } from 'src/app/interfaces/administrative';
import { NgForm } from '@angular/forms';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-register-administrative',
  templateUrl: './register-administrative.component.html',
  styleUrls: ['./register-administrative.component.scss']
})
export class RegisterAdministrativeComponent implements OnInit {

  public error = null;
  private userId = parseInt(this.route.snapshot.paramMap.get('id'));

  homeAddress: Address;
  contactAddress: Address;

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.homeAddress = new Address();
    this.contactAddress = new Address();
  }

  ngOnInit(): void {
  }

  onRegisterAdministrative(form: NgForm): void {

    this.homeAddress = {
      region: form.value.homeRegion,
      city: form.value.homeCity,
      street: form.value.homeStreet,
      number: form.value.homeNumber
    }

    this.contactAddress = {
      region: form.value.contactRegion,
      city: form.value.contactCity,
      street: form.value.contactStreet,
      number: form.value.contactNumber
    }

    const administrative: Administrative = {
      id: this.userId,
      homeAddress: this.homeAddress,
      contactAddress: this.contactAddress,
      status: 1
    }
    console.log(administrative);
    this.auth.registerAdministrative(administrative).subscribe(
      res => this.handleResponse(res),
      err => this.handleError(err)
    );
  }

  handleResponse(res): void {
    this.router.navigate(['/login', { email: res.administrative.email, name: res.administrative.firstname }]);
  }

  handleError(err): void {
    this.error = err.error.errors;
  }

}
