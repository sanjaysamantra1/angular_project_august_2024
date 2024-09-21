import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['a'],
  outputs: ['name_event']
})
export class Child1Component {
  a: number | undefined;
  name: string = 'Sachin';

  name_event = new EventEmitter()
  sendDataToParent() {
    this.name_event.emit(this.name);
  }
}
