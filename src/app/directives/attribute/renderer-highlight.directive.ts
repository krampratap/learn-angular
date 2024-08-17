import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit{

  //Pass the data to the directive
  @Input() defaultColor: string = 'red';
  @Input() highlightColor :string = 'green';


  //Method 3 to set color on action
  @HostBinding('style.backgroundColor') color : string = '';
  constructor(private element: ElementRef, private renderer: Renderer2  ) { }

  //Method 2 to set color on action: Renderer2 is present inbuilt in angular
  ngOnInit(){
      this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
    }

  //Suppose we want to change the color of the element when we hover on it.
  //@HostListener directive listens to all the events of the ELEMENT on which this directive is added.
  @HostListener('mouseenter') onMouseEnter(event: Event){ // Any method name.. the parameter passed inside the hostlistener is keyword
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseleave') onMouseLeave(event: Event){
    //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
    this.color = 'yellow';
  }

  @HostListener('click') onMouseClick(event: Event){
        this.color = this.highlightColor;
    }

}
