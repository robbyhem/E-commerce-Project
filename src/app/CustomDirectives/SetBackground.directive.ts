import {Directive, ElementRef, Input, OnInit, Renderer2} from "@angular/core";
             
@Directive({
  selector: '[setBackground]'
})
export class SetBackground implements OnInit{
  //@Input("setBackground") backgroundColo: string = "#36454F"
  //@Input() textColo: string = "white"

  @Input("setBackground") changetextAndBackgroundColor: {backgroundColo: string, textColo: string}

  constructor(private element: ElementRef, private renderer: Renderer2){
 }
 
 ngOnInit(){
   this.renderer.setStyle(this.element.nativeElement, "backgroundColor", this.changetextAndBackgroundColor.backgroundColo)
   this.renderer.setStyle(this.element.nativeElement, "color", this.changetextAndBackgroundColor.textColo)
 }
}