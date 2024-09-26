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

  timer1: any;

  openSnackBar() {
    new Snackbar('Helloooo, Good Morning', { position: 'top-center', theme: 'light', timeout: 2000 });
  }

  ngOnInit() {
    console.log('Demo-1 Initialized');
    this.timer1 = setInterval(() => {
      console.log('I am an Interval From Demo-1')
    }, 1000)
  }
  ngOnDestroy() {
    console.log('Demo-1 is about to be destroyed')
    clearInterval(this.timer1);
  }
}
