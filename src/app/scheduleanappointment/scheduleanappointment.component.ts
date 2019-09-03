import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scheduleanappointment',
  templateUrl: './scheduleanappointment.component.html',
  styleUrls: ['./scheduleanappointment.component.css']
})
export class ScheduleanappointmentComponent implements OnInit {

  details:FormGroup;
  callerdetails:FormGroup;
  general: FormGroup;
  address: FormGroup;
  contact: FormGroup;
  other: FormGroup;
  closeResult: string;
  isActive:Boolean=false;
  constructor(private fb: FormBuilder,private modalService: NgbModal) { }

  ngOnInit() {

    this.details=this.fb.group({
      patientname:new FormControl(null,Validators.required),
      patientDOB:new FormControl(null),
      phone:new FormControl(null),
      email:new FormControl(null)
    });

    this.callerdetails=this.fb.group({
      callername:new FormControl(null),
      phoneno:new FormControl(null)
    });

    this.general=this.fb.group({
      firstname:new FormControl(null),
      middlename:new FormControl(null),
      lastname:new FormControl(null),
      dob:new FormControl(null),
      gender: new FormControl(null)
    });

    this.address=this.fb.group({
      address1:new FormControl(null),
      address2:new FormControl(null),
      zip:new FormControl(null),
      city:new FormControl(null),
      state:new FormControl(null)
    });

    this.contact=this.fb.group({
      home:new FormControl(null),
      cell:new FormControl(null),
      workphone:new FormControl(null),
      email:new FormControl(null),
      mode:new FormControl(null)
    });

    this.other=this.fb.group({
      ssn:new FormControl(null),
      language:new FormControl(null)
    });

  }

  openEdit(content, i) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  onCheck()
  {
    this.isActive=true;
  }

}
