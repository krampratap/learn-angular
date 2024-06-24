import { Component, ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  //encapsulation: ViewEncapsulation.None
   //If we define any css at this component level .. it will be applied to the entire application if we remove Encapsulation
})  //We can remove encapsulation and define in global.. it will be applied to all components
export class UsersComponent{
  //Property Binding
  toggleButton : boolean = true;
  userCreatedStatus : string = 'No user created';
  userName : string = '';
  userPlace : string = '';
  userList: string[] =[];

  @ViewChild('userAddress') userAddress: ElementRef<HTMLInputElement> = {} as ElementRef;
  //@ViewChild is used to get the DOM element with Element Ref and Native Element

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


  //Communication
    addUser(){
      this.userList.push(this.userName);
      console.log(this.userList);
      console.log(this.userAddress.nativeElement.value); //Read value from @View Child
      }


}
