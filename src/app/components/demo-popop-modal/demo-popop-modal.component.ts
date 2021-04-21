import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-demo-popop-modal',
  templateUrl: './demo-popop-modal.component.html',
  styleUrls: ['./demo-popop-modal.component.css']
})
export class DemoPopopModalComponent implements OnInit {

  // constructor() { }
  bodyText: string;

  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';

  }

  closeResult = '';

  constructor(private modalService: NgbModal,private modal2Service: ModalService) {}


  openModal(id: string) {
    this.modal2Service.open(id);
}

closeModal(id: string) {
    this.modal2Service.close(id);
}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
