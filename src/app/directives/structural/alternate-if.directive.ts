import { Directive, TemplateRef, OnChanges , ViewContainerRef, Input} from '@angular/core';


@Directive({
  selector: '[appAlternateIf]',
  })
export class AlternativeIfDirective implements OnChanges {

@Input() appAlternateIf: boolean = true;

//TemplateRef in place of elementRef as we are getting ng-template
constructor(private templateRef : TemplateRef<any>, private vcRef: ViewContainerRef){
  }

ngOnChanges(){
  if(this.appAlternateIf){
    this.vcRef.createEmbeddedView(this.templateRef);
    }
  else{
    this.vcRef.clear();
    }
  }

  }
