import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles : [`
  .offline {
    color: white;
    }
  `,]
})
export class UserComponent {
  //Interpolation
  userId: number = 10;
  userStatus: string = 'Offline';

@Input()
userName: string='';
  constructor(){
    this.userStatus = Math.random() > 0.5 ? 'Offline' : 'Online'; //If Offline then styles is applied through ngClass
    }

  getColor(){
    if(this.userStatus=='Online')
      {
        return 'green';
      }
    return 'red';
    }



}
