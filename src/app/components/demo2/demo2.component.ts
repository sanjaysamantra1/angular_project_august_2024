import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css'
})
export class Demo2Component {
  ngOnInit(){
    console.log('Demo-2 Initialized')
  }
  ngOnDestroy(){
    console.log('Demo-2 is about to be destroyed')
  }
}
