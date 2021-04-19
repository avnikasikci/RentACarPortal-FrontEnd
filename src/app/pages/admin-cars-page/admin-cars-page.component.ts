import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarViewModel } from 'src/app/models/carViewModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-admin-cars-page',
  templateUrl: './admin-cars-page.component.html',
  styleUrls: ['./admin-cars-page.component.css']
})
export class AdminCarsPageComponent implements OnInit {
  CarViewModelList: CarViewModel[] = [];
  CarList: Car[] = [];
  CarDetailList: CarDetail[] = [];
  dataLoaded = false;
  filterText="";
  
  constructor(
    private toastrService:ToastrService
    ,private carService:CarService
  ) { }

  ngOnInit(): void {
    this.getCars();
  }


  getCars() {
    this.carService.getCars().subscribe(response=>{
      // this.CarViewModelList = response.data;
      debugger;
      this.CarList = response.data; 
      this.dataLoaded = true;
    
    })   
    this.carService.getCarDetails().subscribe(response=>{
      // this.CarViewModelList = response.data;
      debugger;
      this.CarDetailList = response.data; 
      this.dataLoaded = true;
    
    })   
  }

  //editToCar
  editToCar(car:Car){
    if(car.id===1){
      this.toastrService.error("Hata","Bu ürün sepete eklenemez")
    }else{
      this.toastrService.success("Sepete eklendi",car.name)
    }
 
  }
}
