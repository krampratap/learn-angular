import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  //Property Binding
  toggleButton : boolean = true;
  userCreatedStatus : string = 'No user created';
  userName : string = '';
  userPlace : string = '';
  constructor() {
    setTimeout(() => {
      this.toggleButton = false;
      },3000)
    }

//Event Binding
  changeUserCreationStatus(){
      this.userCreatedStatus = 'User created';
    }

  onUpdateUser(event: Event){ //capture the data sent by angular
      //When Input tag in html, data is changed the (input) method is fired.
      //When input is fired... all the events data the angular sends through $event
      this.userName = (event.target as HTMLInputElement).value;
      //The event can be of any type i.e button event or any other.. so for Input we typecase as  HTMLInputElement
    }
}
