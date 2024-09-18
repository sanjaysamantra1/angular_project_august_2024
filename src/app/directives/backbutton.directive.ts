import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackbutton]',
  standalone: true
})
export class BackbuttonDirective {

  // Location : Service (Class), Dependency Injection , Injecting Location service
  constructor(private location: Location) { }

  @HostListener('click')
  handleClick() {
    this.location.back();
  }

}
