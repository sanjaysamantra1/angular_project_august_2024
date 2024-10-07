import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, isSignal, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo1',
  standalone: true,
  imports: [],
  templateUrl: './signal-demo1.component.html',
  styleUrl: './signal-demo1.component.css'
})
export class SignalDemo1Component {
  abc: number = 100;

  userId: WritableSignal<number> = signal(1);
  userName: WritableSignal<string> = signal('Sanjay Samantra');
  messages: WritableSignal<string[]> = signal([]);
  num: WritableSignal<number> = signal(1);
  numSquare: Signal<number> = computed(() => this.num() * this.num());
  userObj: any = {}

  constructor(private httpClient: HttpClient) {
    console.log(`abc is signal? ${isSignal(this.abc)}`)
    console.log(`num is signal? ${isSignal(this.num)}`)
  }
  ngOnInit() {
    this.fetchUserDetails();
  }
  fetchUserDetails() {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${this.userId()}`).subscribe(res => {
      console.log(res);
      this.userObj = res;
    })
  }

  updateName() {
    this.userName.set('Sachin Tendulkar')
  }

  increment() {
    this.num.update((value) => value + 1);
    this.userId.update((value) => value + 1);
    this.messages.update(messages => [...this.messages(), `Value of Num is: ${this.num()}`]);
  }
  decrement() {
    this.num.update((value) => value - 1);
    this.userId.update((value) => value - 1);
    this.messages.update(messages => {
      messages.pop();
      return messages;
    });
  }
  private numEffect = effect(() => {
    console.log('Effect Called: ', this.userId());
    this.fetchUserDetails();
  });
}
