import {Directive, ElementRef, OnInit} from '@angular/core'

@Directive({
  selector: '[appHighlightText]' // With square brackets you can use it as a attribute
  //if you define as appHighlightText only without brackets then you have to use it as a tag in HTML
  // i.e you have to use as <appHighlightText> This text is red </appHighlightText>
  })
export class CustomHighlightTextAttributeDirective implements OnInit{

constructor(private element: ElementRef) {

  }
ngOnInit(){ //Here we are using javascript native featutes.. but angular has its own features to create directive
            // check rendererHighlight Directive
    (<HTMLElement>this.element.nativeElement).style.backgroundColor = 'red';
  }
}
