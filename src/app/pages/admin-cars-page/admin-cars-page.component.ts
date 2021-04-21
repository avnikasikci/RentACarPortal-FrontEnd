import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from 'src/app/components/_modal/modal.service';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarViewModel } from 'src/app/models/carViewModel';
import { CarService } from 'src/app/services/car.service';
// import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
  filterText = "";
  editCarViewModel: CarViewModel;
  carEditForm : FormGroup;


  constructor(
    private toastrService: ToastrService
    , private carService: CarService
    //  ,public dialog: MatDialog
    , private modal2Service: ModalService
  ) { }


  ngOnInit(): void {
   this.editCarViewModel=new CarViewModel();
    this.getCars();
  }


  getCars() {
    this.carService.getCars().subscribe(response => {
      // this.CarViewModelList = response.data;
      this.CarList = response.data;
      this.dataLoaded = true;

    })
    this.carService.getCarDetails().subscribe(response => {
      // this.CarViewModelList = response.data;
      this.CarDetailList = response.data;
      this.dataLoaded = true;

    })
  }

  //editToCar
  editToCar(car: CarDetail) {
    if (car.id === 1) {
      this.toastrService.error("Hata", "Bu ürün sepete eklenemez")
    } else {
      this.toastrService.success("Sepete eklendi", car.carName)
    }

  }


  editCar(id: number) {
    if (id <= 0) {
      //new car
    }
    else {
      //up car
    }

  }

  openEditCarModel(id: number) {
    console.log(id);
    debugger;
    let carEntity:CarViewModel=new CarViewModel();
    if (id <= 0) {

    carEntity.name="new";
    } else {
        let selectedCar=this.CarDetailList.filter(x=>x.id == id);
        carEntity.brandId=selectedCar[0].brandId;
        carEntity.colorId=selectedCar[0].colorId;
        carEntity.name=selectedCar[0].carName;
    }
    this.editCarViewModel=carEntity;

    // this.modal2Service.open("custom-modal-" + id);
    this.modal2Service.open('custom-modal-car-1');


  }
  closeModal(id: string) {
    this.modal2Service.close(id);
  }

}

