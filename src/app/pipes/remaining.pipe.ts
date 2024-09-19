import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  standalone: true
})
export class RemainingPipe implements PipeTransform {
  transform(msg: any, maxlength:any) {
    return maxlength - msg.length;
  }
}
