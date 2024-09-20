import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySort',
  standalone: true
})
export class MySortPipe implements PipeTransform {

  transform(arr: any) {
    return arr.sort((a: any, b: any) => a - b);
  }

}
