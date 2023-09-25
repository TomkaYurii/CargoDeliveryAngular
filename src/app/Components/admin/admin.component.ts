import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User} from "../../models/user";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent {
  listUsers : User[] = [];

  constructor(private userService : UserService){
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAll().subscribe((response : User[])=>{
      this.listUsers = response;
    })
  }


  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'country', 'city'];

}
