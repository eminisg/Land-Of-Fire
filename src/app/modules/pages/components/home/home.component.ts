import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FileService} from "../../../../services/file.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UtilService} from "../../services/util.service";
import {DynamicPopupService} from "../../../../services/dynamic-popup.service";
import {MessagePopupComponent} from "../../../../components/message-popup/message-popup.component";
import {RatingComponent} from "../rating/rating.component";
import {async, count, map, mergeMap, take} from "rxjs";
import {ReviewRequstInterface} from "../../interfaces/reviewRequst.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../../../assets/scss/media-query.scss', '../../../../../assets/scss/animations.scss']
})
export class HomeComponent implements OnInit {

  displayReviews: any[] = []
  toggleRating = false
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    arrows: 0,
  };

  slickInit(e: any) {
  }

  breakpoint(e: any) {
  }

  afterChange(e: any) {
  }

  beforeChange(e: any) {
  }

  constructor(private router: Router,
              private fileService: FileService,
              private fb: FormBuilder,
              private util: UtilService,
              private dynamicPopup: DynamicPopupService,
  ) {
  }

  ngOnInit(): void {
    this.getRatingData()
  }

  randomReviews() {

  }

  toQuotes(section: string) {
    sessionStorage.setItem('active_link', section);
    this.router.navigate([section]);
    this.activeLink(section);
  }

  applyNow() {
    sessionStorage.setItem('active_link', 'employment');
    this.router.navigate(['/employment']);
    this.activeLink(sessionStorage.getItem('active_link'));
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


  toggleRatingPopup() {
    this.toggleRating = !this.toggleRating
  }

  addData() {
    let today = new Date();
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getRatingData() {
    let reviewsList: any;
    this.util.getRatingData();
    this.util.ratingDataSource.pipe().subscribe((res: ReviewRequstInterface) => {
      reviewsList = Object.values(res);
      while (this.displayReviews.length < 3) {
        let index = this.getRandomInt(reviewsList.length);
        this.displayReviews.push(reviewsList[index]);
        reviewsList.splice(index,1);
      }
    });
  }

  toggleMessagePopup() {
    this.dynamicPopup.displayConfirmModal(MessagePopupComponent);
  }

  addReview() {
    this.router.navigate(['/reviews'])
  }
}


