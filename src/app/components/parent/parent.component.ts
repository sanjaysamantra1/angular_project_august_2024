import { Component, ElementRef, KeyValueDiffer, KeyValueDiffers, ViewChild, viewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    Child1Component,
    Child2Component,
    FormsModule,
    CommonModule
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  a: number;
  parent_name: string = '';

  @ViewChild('div1') myDiv1: any;
  @ViewChild('myInputBox') myInputBox: any;

  count = 0;
  previousCount = 0;
  hasChanged = false;

  increment = () => {
    this.previousCount = this.count;
    this.count++
  }
  decrement = () => { this.count-- }

  collectChildData(name: any) {
    this.parent_name = name;
  }

  async fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let finalResponse = await response.json();
    console.log(finalResponse)
  }

  user = { name: 'John Doe' };
  private userDiffer: KeyValueDiffer<string, any>;
  changes: string[] = [];

  changeUserData(newName: string) {
    this.user.name = newName;
  }

  // httpClient service helps to make API calls in angular
  constructor(private keyValueDiffers: KeyValueDiffers) {
    console.log("Parent constructor");
    console.log(this.myDiv1)
    //  this.myDiv1.nativeElement.style.color = 'red'
    this.a = 10;
    this.userDiffer = this.keyValueDiffers.find(this.user).create();
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
    this.fetchData()
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
    if (this.count !== this.previousCount) {
      console.log('count changed', this.count);
    }
    const userChanges = this.userDiffer.diff(this.user);
    if (userChanges) {
      userChanges.forEachChangedItem(item => {
        this.changes.push(`Property ${item.key} changed from ${item.previousValue} to ${item.currentValue}`);
      });
    }
  }
  ngAfterContentInit() {
    console.log('Parent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Parent ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.myDiv1);
    this.myDiv1.nativeElement.style.color = 'red'
    this.myInputBox.nativeElement.focus();
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }

}
