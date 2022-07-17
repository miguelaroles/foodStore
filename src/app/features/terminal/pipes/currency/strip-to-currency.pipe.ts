import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripToCurrency'
})
export class StripToCurrencyPipe implements PipeTransform {

  transform(value: number): number {
    return value / 100;
  }

}
