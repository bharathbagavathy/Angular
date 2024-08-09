import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ttIf]'
})
export class TtIfDirective {

  ttif:boolean=true;

  constructor(private view:ViewContainerRef, private templateref:TemplateRef<any>) { }

  @Input() set ttIf(condition: any){
    this.ttif=condition;
    this.updateView();
  }
  
  updateView(){
    if(this.ttif){
      this.view.createEmbeddedView(this.templateref);
    }
    else{
      this.view.clear();
    }
  }
}
