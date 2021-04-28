import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';
import { CarViewModel } from '../models/carViewModel';

@Pipe({
  name: 'carfilter'
})
export class CarPipe implements PipeTransform {

  transform(value: CarDetail[], filterText: string,filterBrand:number,filterColor:number): CarDetail[] {
    debugger;
    filterText = filterText?filterText.toLocaleLowerCase():""
    var FilterData=filterText?value
    .filter((p:CarDetail)=>p.carName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
    if(filterColor > 0 ){
      FilterData = FilterData.filter((p:CarDetail) => p.colorId == filterColor );
    }
    if(filterBrand >0){
      FilterData=  FilterData.filter((p:CarDetail) => p.brandId == filterBrand )
    }



    return FilterData;
  }

}



