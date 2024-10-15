import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  prod: any;

  constructor(private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.prod = params;
      console.log(params);
    })
  }
}
