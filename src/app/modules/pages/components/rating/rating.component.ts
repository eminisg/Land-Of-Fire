import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  selectFile?: null
  form!: FormGroup
  image?: any
  path?: any

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm() {
    this.form = this.fb.group({
      image: [null, []],
      imageURL: [null, []],
    })
  }
}
