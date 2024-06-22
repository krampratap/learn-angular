import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  //Interpolation
  userId: number = 10;
  userStatus: string = 'Offline';
}
