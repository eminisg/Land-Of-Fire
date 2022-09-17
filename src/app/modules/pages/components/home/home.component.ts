import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FileService} from "../../../../services/file.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../../../assets/scss/media-query.scss', '../../../../../assets/scss/animations.scss']
})
export class HomeComponent implements OnInit {

  toggleMessage = false
  toggleRating = false
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  constructor(private router: Router,private fileService:FileService) {
  }

  ngOnInit(): void {
    this.getImg()
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
}
