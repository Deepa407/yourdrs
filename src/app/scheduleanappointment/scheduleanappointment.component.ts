import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
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
  control = new FormControl();
  relations: string[] = ['Child', 'Parent', 'Self', 'Spouse','Aunt','Cousin','Former Spouse','Grandchild','Inlaw','Niece/Nephew'];
  filteredRelation: Observable<string[]>;

  constructor(private fb: FormBuilder,private modalService: NgbModal) { }

  ngOnInit() {

    this.details=this.fb.group({
      patientname:new FormControl(null,Validators.required),
      patientDOB:new FormControl(null),
      phone:new FormControl('',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)]),
      email:new FormControl(null,[Validators.required,Validators.email])
    });

    this.callerdetails=this.fb.group({
      callername:new FormControl(null,Validators.required),
      phoneno:new FormControl('',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),Validators.required])
    });

    this.general=this.fb.group({
      firstname:new FormControl(null,Validators.required),
      middlename:new FormControl(null),
      lastname:new FormControl(null,Validators.required),
      dob:new FormControl(null),
      gender: new FormControl(null,Validators.required)
    });

    this.address=this.fb.group({
      address1:new FormControl(null),
      address2:new FormControl(null),
      zip:new FormControl(null),
      city:new FormControl(null),
      state:new FormControl(null)
    });

    this.contact=this.fb.group({
      home:new FormControl('',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)]),
      cell:new FormControl('',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)]),
      workphone:new FormControl('',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      mode:new FormControl(null)
    });

    this.other=this.fb.group({
      ssn:new FormControl(null),
      language:new FormControl(null)
    });

    this.filteredRelation = this.control.valueChanges.pipe(
      startWith(''),
  map(value => this._filter(value))
    );

  }

  openEdit(content, i) {


    this.modalService.open(content, {size:'xl'});
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.relations.filter(relation => this._normalizeValue(relation).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  checked:boolean = false;

  addprop1(e){
      if(e.target.checked){
        this.checked = true;
      }else{
        this.checked = false;
      }
    }

}
