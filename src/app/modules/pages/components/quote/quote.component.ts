import {Component, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quoteForm!: FormGroup
  id!: string

  constructor(private util: UtilService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm() {
    this.quoteForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      companyAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      description: ['', [Validators.required]],
      id:[''],
      date:['']
    })
  }

  submitQuote(postQuoteData: any) {
    this.addData();
    // this.util.postQuoteData(this.quoteForm.value.id , postQuoteData)
  }


  addData() {
    let today = new Date();
    this.quoteForm.value.id = (new Date().getTime()).toString();
    this.quoteForm.value.date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  today.getDate() + ' / '+ (today.getHours()) + ':' + (today.getMinutes()) + ':' + (today.getSeconds());
  }
}
