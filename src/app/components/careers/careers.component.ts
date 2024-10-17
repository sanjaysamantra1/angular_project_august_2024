import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LargeComponent } from '../large/large.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LargeComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

}
