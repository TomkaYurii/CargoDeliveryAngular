import {Address} from "./address";

export class User {
  userId: string;
  title:string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  created: Date | null;
  updated: Date | null;
  isVerified: boolean | null;
  admin: boolean | null;
  /*addresses: Address[];*/

  constructor() {
    this.userId = "";
    this.title = "";
    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.role = "";
    this.created = null;
    this.updated = null;
    this.isVerified = null;
    this.admin = null;
  /*  this.addresses = [];*/
  }
}
