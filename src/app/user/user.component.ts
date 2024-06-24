import { Component, Input ,OnInit, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles : [`
  .offline {
    color: white;
    }
  `,]
})
export class UserComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
OnDestroy{
  //Interpolation
  userId: number = 10;
  userStatus: string = 'Offline';

@Input()
userName: string='';
  constructor(){
    this.userStatus = Math.random() > 0.5 ? 'Offline' : 'Online'; //If Offline then styles is applied through ngClass
    console.log("constructor");
    }
@ContentChild('userParagraph') userParagraph: ElementRef<HTMLInputElement> = {} as ElementRef; //REferenced from another component
//@ViewChild you can access only in the same component

  ngOnInit(){
    console.log("ng On Init : Users component");
    console.log(this.userParagraph); //Here undefined.. Check ngAfterContentInit
    }
  ngOnChanges(changes: SimpleChanges){ //Trigged when there is a change in the input
    //SimpleChanges contains the previous and current value of the @Input elements
    console.log("ng On changes: User component");
    console.log(changes);
  }
ngDoCheck(){ // Triggered when any change(every event like button click) happens in the component
  console.log("ng Do check : User component");
  }

ngAfterContentInit(){
  console.log("after View on init: User component");
  console.log(this.userParagraph);  //Here you will get the value
  }

ngAfterContentChecked(){
  console.log("After content check :  User component");
  }

ngAfterViewInit(){
  console.log("After View Init: User component");
  }
ngAfterViewChecked(){
  console.log("After View Checked: User component");
  }
ngOnDestroy(){
  console.log("After destroy : User component");
  }
  getColor(){
    if(this.userStatus=='Online')
      {
        return 'green';
      }
    return 'red';
    }
}
