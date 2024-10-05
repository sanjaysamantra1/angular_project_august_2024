import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message1',
  standalone: true,
  imports: [],
  templateUrl: './message1.component.html',
  styleUrl: './message1.component.css'
})
export class Message1Component {
  messages: any = [];
  constructor(private messageService: MessageService) {
  }
  ngOnInit() {
    this.messageService.getMessage().subscribe(val => {
      if (val) {
        this.messages.push(val);
      } else {
        this.messages = []
      }
    })
  }
}
