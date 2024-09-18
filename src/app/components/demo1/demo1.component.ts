import { Component } from '@angular/core';
import Snackbar from 'awesome-snackbar'

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {
  openSnackBar() {
    new Snackbar('Helloooo, Good Morning', { position: 'top-center', theme: 'light', timeout: 2000 });
  }
}
