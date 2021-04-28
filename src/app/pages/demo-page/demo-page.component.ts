import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from 'src/app/components/_modal';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarViewModel } from 'src/app/models/carViewModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent implements OnInit {

  CarViewModelList: CarViewModel[] = [];
  CarList: Car[] = [];
  CarDetailList: CarDetail[] = [];
  dataLoaded = false;
  filterText = "";
  editCarViewModel: CarViewModel;
  carEditForm!: FormGroup;

  people:  Car[] = [];
  selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';
  selectedPeople = [{ name: 'Karyn Wright' }];

  constructor(
    private toastrService: ToastrService
    , private carService: CarService
    //  ,public dialog: MatDialog
    , private modal2Service: ModalService
    ,private formBuilder: FormBuilder
    
  ) { }

  ngOnInit(): void {
    this.getCars();
  }
  getCars() {
    this.carService.getCars().subscribe(response => {
      // this.CarViewModelList = response.data;
      this.CarList = response.data;
      this.dataLoaded = true;
      this.people=response.data;

    })
    this.carService.getCarDetails().subscribe(response => {
      // this.CarViewModelList = response.data;
      this.CarDetailList = response.data;
      this.dataLoaded = true;

    })
  }

//Demo MUlti Dropdown


clearModel() {
  this.selectedPeople = [];
}

changeModel() {
  this.selectedPeople = [{ name: 'New person' }];
}

//Demo Multi Dropdown

}
