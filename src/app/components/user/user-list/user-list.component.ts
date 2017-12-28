import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
    });
    
  }

}
