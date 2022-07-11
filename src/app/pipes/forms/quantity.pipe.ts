import { Pipe, PipeTransform } from '@angular/core';
import { FormItems } from "../../interface/form-items"

@Pipe({
  name: 'quantity'
})
export class QuantityPipe implements PipeTransform {

  transform(value: FormItems,name: string): number {
    return value?.items.find((item:any) => item.name === name)?.quantity || 0;
  }

}
