import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectContains'
})
export class ObjectContainsPipe implements PipeTransform {

  transform(value: any[], key: string): boolean {
    return value.some((item) => Object.values(item).includes(key));
  }

}
