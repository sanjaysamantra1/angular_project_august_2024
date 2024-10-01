import { Injectable } from '@angular/core';
import Snackbar from 'awesome-snackbar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }
  showError(msg: string) {
    new Snackbar(`Something Went Wrong, ${msg}`, {
      position: 'bottom-center',
      actionText: 'Undo',
      style: {
        container: [
          ['background-color', 'red'],
          ['border-radius', '5px']
        ],
        message: [
          ['color', '#eee'],
        ],
        bold: [
          ['font-weight', 'bold'],
        ],
        actionButton: [
          ['color', 'white'],
        ],
      }
    });
  }
}
