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

  constructor(private userService: UserService, private router: Router) { }

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

  // onSelect(user) {
  //   this.router.navigate(['/list', user.id]);
  // }

  // onDelete(user) {
  //   this.userService.deleteUser(user.id)
  //     .subscribe(
  //       (res) => {
  //         console.log('User deleted.');
  //         console.log(res);

  //         const position = this.users.findIndex(
  //           // Get the index of the first element in the array that has same id
  //           (deletedUser) => {
  //             return deletedUser.id == user.id;
  //           }
  //         );
  //         // Remove element on specified position
  //         this.users.splice(position, 1);
  //         alert('User deleted.')
  //       },
  //       (err) => console.log(err)
  //     );
  // }

}
