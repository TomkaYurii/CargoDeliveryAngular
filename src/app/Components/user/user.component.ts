import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { User} from "../../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

export class UserComponent {
  //save userId in a varibale
  userId: string = '';
  userInfo: User = new User();
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.userId = this.authService.getUserId() as string;
    this.refreshProfile();
  }

  //get User Info
  refreshProfile() {
    this.userService.get(this.userId).subscribe((response: any) => {
      console.log(response);
      this.userInfo.userId = response.id;
      this.userInfo.title = response.title;
      this.userInfo.firstname = response.firstName;
      this.userInfo.lastname = response.lastName;
      this.userInfo.email = response.email;
      this.userInfo.role = response.role;
      this.userInfo.created = response.created ? new Date(response.created) : null;
      this.userInfo.updated = response.updated ? new Date(response.updated) : null;
      this.userInfo.isVerified = response.isVerified;
      this.userInfo.admin = response.role === 'Admin';
    });
  }
}
