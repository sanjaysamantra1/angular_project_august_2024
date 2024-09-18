import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private ele: ElementRef) {
    console.log(this.ele);
  }

  @HostListener('mouseenter')
  onMouseOver() {
    this.ele.nativeElement.style.color = 'red'
    this.ele.nativeElement.style.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.ele.nativeElement.style.color = 'black'
    this.ele.nativeElement.style.backgroundColor = 'white'
  }

}
