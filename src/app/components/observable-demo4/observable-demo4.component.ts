import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-observable-demo4',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo4.component.html',
  styleUrl: './observable-demo4.component.css'
})
export class ObservableDemo4Component {
  ngOnInit() {
    // this.subjectDemo();
    // this.behaviourSubjectDemo();
    // this.replaySubjectDemo();
    this.asyncSubjectDemo();
  }
  subjectDemo() {
    let myPublisher1 = new Subject();
    myPublisher1.next('AAAAA');
    myPublisher1.next('BBBBB');
    myPublisher1.subscribe(val => console.log('Subscriber-1: ', val));
    myPublisher1.next('CCCCC');
    myPublisher1.subscribe(val => console.log('Subscriber-2: ', val));
    myPublisher1.next('DDDDD');
  }
  behaviourSubjectDemo() {
    let myPublisher1 = new BehaviorSubject('Default Valueeeeeeeeeeee');
    myPublisher1.subscribe(val => console.log('Subscriber-1: ', val));
    myPublisher1.next('AAAAA');
    myPublisher1.next('BBBBB');
    myPublisher1.subscribe(val => console.log('Subscriber-2: ', val));
    myPublisher1.next('CCCCC');
    myPublisher1.subscribe(val => console.log('Subscriber-3: ', val));
    myPublisher1.next('DDDDD');
  }
  replaySubjectDemo() {
    let myPublisher1 = new ReplaySubject();
    myPublisher1.next('AAAAA');
    myPublisher1.next('BBBBB');
    myPublisher1.subscribe(val => console.log('Subscriber-1: ', val));
    myPublisher1.next('CCCCC');
    myPublisher1.subscribe(val => console.log('Subscriber-2: ', val));
    myPublisher1.next('DDDDD');
  }
  asyncSubjectDemo() {
    let myPublisher1 = new AsyncSubject();
    myPublisher1.next('AAAAA');
    myPublisher1.next('BBBBB');
    myPublisher1.subscribe(val => console.log('Subscriber-1: ', val));
    myPublisher1.next('CCCCC');
    myPublisher1.subscribe(val => console.log('Subscriber-2: ', val));
    myPublisher1.next('DDDDD');
    myPublisher1.complete();
  }
} 
