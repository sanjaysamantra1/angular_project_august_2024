import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  standalone: true,
  // pure: false // Impure Pipe
})
export class RemainingPipe implements PipeTransform {
  transform(msg: any, maxlength: any) {
    console.log('Remaining Pipe Called')
    return maxlength - msg.length;
  }
}
