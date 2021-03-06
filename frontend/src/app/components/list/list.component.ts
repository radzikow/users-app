import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users = [];
  page: number = 1;
  isLoading: boolean = false;
  fetchingData: boolean = false;

  sortingName: string;
  isDesc: boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.onGetUsers();
  }

  // Get users
  onGetUsers() {
    this.fetchingData = true;
    return this.userService.getUsers()
      .subscribe(
        (users) => {
          this.users = users.users
          this.fetchingData = false;
        },
        (err) => console.log(err)
      );
  }

  // Generate users
  onGenerateUsers() {
    this.isLoading = true;
    return this.userService.generateUsers()
      .subscribe(
        (res) => {
          this.onGetUsers();
          console.log(res.msg);
          this.isLoading = false;
        },
        (err) => console.log(err)
      );
  }

  // Sort users
  sort(name: string): void {
    if (name && this.sortingName !== name) {
      this.isDesc = false;
    } else {
      this.isDesc = !this.isDesc;
    }
    this.sortingName = name;
  }

}
