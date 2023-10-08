import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User} from "../../models/user";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent {
  listOfUser : User[] = [];

  constructor(private userService : UserService){
    this.getAllUsers();
  }

  displayedColumns: string[] = ['id', 'title', 'firstName', 'lastName', 'email', 'role', 'isVerified'];

  getAllUsers(){
    this.userService.getAll().subscribe((response : User[])=>{
      this.listOfUser = response;
    })
  }

/*
  "id": 1,
  "title": "Mr",
  "firstName": "Yurii",
  "lastName": "Tomka",
  "email": "jolie.spencer88@ethereal.email",
  "role": "Admin",
  "created": "2023-10-01T08:54:02.2472737",
  "updated": null,
  "isVerified": true
*/





}
