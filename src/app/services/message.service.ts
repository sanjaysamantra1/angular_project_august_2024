import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }
  clearMessages() {
    this.subject.next(null);
  }
  getMessage(){
    return this.subject.asObservable();
  }
}
