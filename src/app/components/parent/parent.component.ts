import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, KeyValueDiffer, KeyValueDiffers, OnChanges, OnInit, ViewChild, viewChild, ViewChildren } from '@angular/core';
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
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnInit, OnChanges {
  fruits: string[] = ['apple', 'banana']

  a: number;
  parent_name: string = '';

  @ViewChild('div1') myDiv1: any;
  @ViewChild('myInputBox') myInputBox: any;
  @ViewChild(Child1Component) child1Component: any;
  @ViewChildren('myInputBox') myInputBoxes: any;

  count = 0;
  previousCount = 0;
  hasChanged = false;
  flag = true;

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
  constructor(private keyValueDiffers: KeyValueDiffers, private cdr: ChangeDetectorRef) {
    console.log("Parent constructor");
    console.log(this.myDiv1)
    //  this.myDiv1.nativeElement.style.color = 'red'
    this.a = 10;
    this.userDiffer = this.keyValueDiffers.find(this.user).create();
  }
  ngOnInit() {  // method from OnInit Interface
    console.log('Parent ngOnInit');
    this.fetchData()
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
    console.log(this.fruits)
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
    console.log(this.child1Component);
    console.log(this.child1Component.name);

    this.myInputBoxes._results?.forEach((ele: any) => {
      ele.nativeElement.style.backgroundColor = 'pink';
    });
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }

}
