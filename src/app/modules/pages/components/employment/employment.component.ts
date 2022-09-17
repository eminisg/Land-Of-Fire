import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtilService} from "../../services/util.service";

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {
  employmentForm!: FormGroup
  constructor(private fb: FormBuilder,private util:UtilService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.employmentForm = this.fb.group({
      fullName: ['', [Validators.required]],
      experience: ['', []],
      noExperience: ['', [Validators.required]],
      position: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      street: ['', [Validators.required]],
      streetLine: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      region: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      streetPrev: ['', []],
      streetLinePrev: ['', []],
      cityPrev: ['', []],
      statePrev: ['', []],
      zipPrev: ['', []],
      socialSecurity: ['', [Validators.required]],
      emergencyFirstName: ['', [Validators.required]],
      emergencyLastName: ['', [Validators.required]],
      emergencyPhone: ['', [Validators.required]],
      applied: [null, [Validators.required]],
      work: [null, [Validators.required]],
      anotherName: ['', []],
      prevEmployment: [null, [Validators.required]],
      prevEmploymentName: ['', []],
      startWork: ['', [Validators.required]],
      states: ['', []],
      safeDrive: ['', []],
      crime: ['', [Validators.required]],
      explain: ['', []],
      pendingCharges: [null, [Validators.required]],
      highest: ['', []],
      college: ['', []],
      school: ['', []],
      signed: ['', [Validators.required]],
      id: [''],
      date: ['']
    })
  }

  submit(){
    this.addData()
    // this.util.postEmploymentData(this.employmentForm.value.id , this.employmentForm.value)
  }

  addData() {
    let today = new Date();
    this.employmentForm.value.id = (new Date().getTime()).toString();
    this.employmentForm.value.date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  today.getDate() + ' / '+ (today.getHours()) + ':' + (today.getMinutes()) + ':' + (today.getSeconds());
  }

}
