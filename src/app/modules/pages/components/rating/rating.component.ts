import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileService} from "../../../../services/file.service";
import {UtilService} from "../../services/util.service";
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(
    private fb: FormBuilder,
    private fileService: FileService,
    private util: UtilService,
    private activeRoute: ActivatedRoute,
    private router:Router,
  ) {
  }

  ngOnInit(): void {
    this.removeHeader();
    this.initializeForm();
    this.ratingAction();
  }

  initializeForm() {
    this.form = this.fb.group({
      image: [null, [Validators.required]],
      grade: [null, [Validators.required]],
      username: [null, [Validators.required]],
      companyName: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      address: [null, [Validators.required]],
      id: [null, [Validators.required]],
      date: [''],
    })
  }

  removeHeader() {
    this.activeRoute.url.subscribe(res => {
      if (res[0].path === 'reviews') {
        const header = document.getElementById('header') as HTMLElement;
        header.style.display = 'none';
        window.scrollTo({top: 0, behavior: 'auto'});
      }
    })
  }

  submit() {
    this.addData();
    if(this.form.value.image !== undefined) {
      this.fileService.postImg(this.form.value, this.form.value.id);
      this.util.postQuoteData(this.form.value.id, this.form.value);

      this.form.reset();
      this.clearImage();
    }
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
    this.form.value.date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' / ' + (today.getHours()) + ':' + (today.getMinutes()) + ':' + (today.getSeconds());
  }

  ratingAction() {
    const stars = Array.from(document.getElementsByClassName('mdi-star'))as any
    stars.forEach((star:any,i:number) => star.addEventListener('click',(action:any)=>{
      let current_star_level1 = i + 1

      stars.forEach((star:any,j:number)=>{
        if(current_star_level1 >= j+1){
        star.classList.add('star_active')
        } else {
          star.classList.remove('star_active')
        }
      });
      const review = Array.from(document.getElementsByClassName('star_active'));
      this.form.get('grade')?.setValue(review.length);
    }));

  }
}
