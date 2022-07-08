import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countCategory'
})
export class CountCategoryPipe implements PipeTransform {

  transform(value: any[], tab: number): number {
    console.log("// test 1 //", value);
    console.log("// test 2 //", tab);
    console.log("/// test 3///", value.filter((item:any) => item.category === tab).length);
    return value.filter((item:any) => item.category === tab).length;
  }

}
