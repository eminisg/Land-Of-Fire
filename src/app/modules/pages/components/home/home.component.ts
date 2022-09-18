import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FileService} from "../../../../services/file.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UtilService} from "../../services/util.service";
import {getDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../../../assets/scss/media-query.scss', '../../../../../assets/scss/animations.scss']
})
export class HomeComponent implements OnInit {

  toggleMessage = false
  toggleRating = false
  form!:FormGroup
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    arrows:0,
  };

  slickInit(e: any) {
  }

  breakpoint(e: any) {
  }

  afterChange(e: any) {
  }

  beforeChange(e: any) {
  }

  constructor(private router: Router,private fileService:FileService,private fb:FormBuilder,private util:UtilService) {
  }

  ngOnInit(): void {
    this.getImg();
    this.initializeMessageForm();
  }

  initializeMessageForm(){
    this.form = this.fb.group({
      username:['Emin Iskenderov'],
      email:['emin@mail.ru'],
      phone:['+994506447721'],
      text:['Some Text'],
      id:[''],
      date:[''],
    })
  }

  toQuotes(section: string) {
    localStorage.setItem('active_link', section);
    this.router.navigate([section]);
    this.activeLink(section);
  }

  applyNow() {
    localStorage.setItem('active_link', 'employment');
    this.router.navigate(['/employment']);
    this.activeLink(localStorage.getItem('active_link'));
  }

  activeLink(section: string | null) {
    let navLink = Array.from(document.getElementsByClassName('nav-link'));
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove('link_active');
      for (let i = 0; i < navLink.length; i++) {
        if (navLink[i].classList.contains(<string>section)) {
          navLink[i].classList.add('link_active');
        }
      }
    }

  }

  toggleMessagePopup() {
      this.toggleMessage = !this.toggleMessage
  }


  toggleRatingPopup() {
    this.toggleRating = !this.toggleRating
  }

  getImg(){

  }

  submitForm() {
    this.addData()
    this.util.postQuoteData(this.form.value.id,this.form.value)
    this.toggleMessagePopup();
  }

  addData() {
    let today = new Date();
    this.form.value.id = (new Date().getTime()).toString();
    this.form.value.date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  today.getDate() + ' / '+ (today.getHours()) + ':' + (today.getMinutes()) + ':' + (today.getSeconds());
  }
}
