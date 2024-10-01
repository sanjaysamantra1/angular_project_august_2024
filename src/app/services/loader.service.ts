import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  show() {
    console.log('Loader Starts.........')
  }
  hide() {
    console.log('Hide Loader')
  }
}
