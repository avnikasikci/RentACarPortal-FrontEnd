import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';
import { CarViewModel } from '../models/carViewModel';

@Pipe({
  name: 'car'
})
export class CarPipe implements PipeTransform {

  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((p:CarDetail)=>p.carName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}



