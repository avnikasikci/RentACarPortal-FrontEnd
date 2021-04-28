import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/components/_modal/modal.service';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarViewModel } from 'src/app/models/carViewModel';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
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
  filterColor = 0;
  filterBrand = 0;
  editCarViewModel: CarViewModel;
  carEditForm!: FormGroup;
  ColorList:Color[]=[];
  BrandList:Brand[]=[];
  selectedBrand=0;
  selectedColor=0;

  constructor(
     private toastrService: ToastrService
    ,private carService: CarService
  //,public dialog: MatDialog
    ,private modal2Service: ModalService
    ,private formBuilder: FormBuilder
    ,private brandService: BrandService
    ,private colorService: ColorService
    ,private router: Router

    
  ) { }


  ngOnInit(): void {
   this.editCarViewModel=new CarViewModel();
    this.getCars();
    this.getBrands();
    this.getColors();
    this.createCarForm();
  }

  createCarForm() {
    this.carEditForm = this.formBuilder.group({
      id: [this.editCarViewModel.id],
      name: [this.editCarViewModel.name, Validators.required],
      brandId: [this.editCarViewModel.brandId, Validators.required],
      colorId: [this.editCarViewModel.colorId, Validators.required],
      dailyPrice: [this.editCarViewModel.dailyPrice, Validators.required],
      minFindeksScore: [this.editCarViewModel.minFindeksScore, Validators.required],
      modelYear: [this.editCarViewModel.modelYear, Validators.required],
      description: [this.editCarViewModel.description, Validators.required],
      brandFilterText: [''],
      colorFilterText: [''],
    });
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
  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      // this.CarViewModelList = response.data;
      this.BrandList = response.data;      
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response => {
      // this.CarViewModelList = response.data;
      this.ColorList = response.data;      
    })
  }
  openEditCarModel(id: number) {
    console.log(id);
    debugger;
    let carEntity:CarViewModel=new CarViewModel();
    if (id <= 0) {

    carEntity.id=0;
    carEntity.name="new";
    } else {
        let selectedCar=this.CarDetailList.filter(x=>x.id == id);
        
        carEntity.id=selectedCar[0].id;
        carEntity.brandId=selectedCar[0].brandId;
        carEntity.colorId=selectedCar[0].colorId;
        carEntity.name=selectedCar[0].carName;
        carEntity.brandId=selectedCar[0].brandId;
        carEntity.colorId=selectedCar[0].colorId;
        carEntity.dailyPrice=selectedCar[0].dailyPrice;
        carEntity.minFindeksScore=selectedCar[0].minFindeksScore;
        carEntity.modelYear=selectedCar[0].modelYear;
        carEntity.description=selectedCar[0].description;
    }
    this.editCarViewModel=carEntity;

    // this.modal2Service.open("custom-modal-" + id);
    this.createCarForm();
    this.modal2Service.open('custom-modal-car-1');


  }
  closeModal(id: string) {
    this.modal2Service.close(id);
  }
  //SaveEditModelCar
  SaveEditModelCar() {
    debugger;
    if (!this.carEditForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let carModule: Car = { ...this.carEditForm.value };
    if(carModule.id > 0){
      this.carService.update(carModule).subscribe((response) => {
        this.toastrService.success(response.message);
        this.router.navigate(['admin', 'editCar']);
        this.getCars();
      });
    }else{
       this.carService.add(carModule).subscribe((response) => {
         this.toastrService.success(response.message);
         this.router.navigate(['admin', 'editCar']);
       });
       this.getCars();
  }
  this.closeModal('custom-modal-car-1');
  
}

}

