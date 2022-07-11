import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countCategory'
})
export class CountCategoryPipe implements PipeTransform {

  transform(value: any[], tab: number): number {
    return value.filter((item:any) => item.category === tab).length;
  }

}
