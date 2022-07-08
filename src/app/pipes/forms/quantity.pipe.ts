import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantity'
})
export class QuantityPipe implements PipeTransform {

  transform(value: {price:number;items:any[]},name: string): number {
    return value?.items.find((item:any) => item.name === name)?.quantity || 0;
  }

}
