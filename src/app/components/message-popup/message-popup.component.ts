import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UtilService} from "../../modules/pages/services/util.service";
import {DynamicPopupService} from "../../services/dynamic-popup.service";

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.scss']
})
export class MessagePopupComponent implements OnInit {

  form!: FormGroup

  constructor(
    private fb:FormBuilder,
    private util:UtilService,
    private dyn:DynamicPopupService,
  ) { }

  ngOnInit(): void {
    this.initializeMessageForm()
  }

  initializeMessageForm() {
    this.form = this.fb.group({
      username: [''],
      email: [''],
      phone: [''],
      text: [''],
      id: [''],
      date: [''],
    })
  }

  addData() {
    let today = new Date();
    this.form.value.id = (new Date().getTime()).toString();
    this.form.value.date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' / ' + (today.getHours()) + ':' + (today.getMinutes()) + ':' + (today.getSeconds());
  }

  submitForm() {
    this.addData()
    this.util.postQuoteData(this.form.value.id, this.form.value)

  }

  closePopup() {
    this.dyn.destroyModal()
  }
}
