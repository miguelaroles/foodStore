import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: number): string {

    return (parseInt(`${value}`) <= 0) ? 'danger' : 'success';
  }

}
