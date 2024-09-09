import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName: string = 'Sachin';
  img_url: string = 'https://i.pinimg.com/736x/6b/cf/87/6bcf8787f5d2f4af1ad721ab4a6d2efe.jpg';
  flag: boolean = false;

  f1() {
    alert('I am F1...')
  }
  nameChanged() {
    console.log('name value changed', this.myName);
  }
  onNameChange(updatedName: string) {
    console.log(updatedName)
  }
}
