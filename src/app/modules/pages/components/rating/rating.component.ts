import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FileService} from "../../../../services/file.service";

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
  fileList!: FileList

  constructor(private fb: FormBuilder,private fileService:FileService) {
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm() {
    this.form = this.fb.group({
      image: [null, []],
      id:[null,[]],
      date:[''],
    })
  }

  submit() {
    this.addData();
    this.fileService.postImg(this.form.value,this.form.value.id);
  }

  preview(event: any) {
    this.form.value.image = event.target.files[0];
    this.fileList = event.target.files;
    let frame = document.getElementById('frame') as HTMLImageElement
    frame.src = URL.createObjectURL(event.target.files[0]);
    const formData = new FormData();
    formData.append('image', event.target.files[0].type);
  }

  clearImage() {
    let frame = document.getElementById('frame') as HTMLInputElement;
    let image = document.getElementById('image') as any;
    image.value = null
    frame.src = "";
  }

  addData() {
    let today = new Date();
    this.form.value.id = (new Date().getTime()).toString();
    this.form.value.date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  today.getDate() + ' / '+ (today.getHours()) + ':' + (today.getMinutes()) + ':' + (today.getSeconds());
  }
}
