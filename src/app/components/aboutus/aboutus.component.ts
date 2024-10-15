import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  pageHasChanges = true;
  constructor(private router: Router, private location: Location) {

  }
  goToHomeComp() {
    console.log('Do Something......');
    this.router.navigate(['/home']);
  }
  previous() {
    this.location.back();
  }
  next() {
    this.location.forward();
  }
}
