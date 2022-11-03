import { Component, OnInit } from '@angular/core';
import {AdminUtilService} from "../../services/admin-util.service";
import {RatingRequestInterface} from "../../interfaces/ratingRequest.interface";

@Component({
  selector: 'app-rating-table',
  templateUrl: './rating-table.component.html',
  styleUrls: ['./rating-table.component.scss']
})
export class RatingTableComponent implements OnInit {
  pageSize = 10;
  currentPage = 1;
  pageOptions = [10, 20, 50, 100]
  comparedArray!:RatingRequestInterface[]
  reviewsArray!:RatingRequestInterface[]
  constructor(private adminUtil:AdminUtilService) { }

  ngOnInit(): void {
    this.getReviewsArray();
  }

  getThisMonthReviews() {
    let last = (new Date().getFullYear()) + '-' + (new Date().getMonth()) + '-' + ('01');
    this.comparedArray = this.reviewsArray.filter(
      (obj:RatingRequestInterface) => new Date(obj.date.substr(0, 7))  >= new Date(last)
    ).reverse();
  }

  getReviewsArray() {
    this.adminUtil.getReviewsData().subscribe(res => {
      if (res) {
        this.reviewsArray = Object?.values(res);
        this.getThisMonthReviews();
      }
    })
  }

  pagination(page: number) {
    this.currentPage = page;
  }

  changePageSize(number: string) {
    this.pageSize = Number(number);
    this.currentPage = 1;
  }

  getPages() {
    const arr = [];
    let pagesCount = Math.ceil(this.reviewsArray?.length / this.pageSize)
    for (let i = 1; i <= pagesCount; i++) {
      arr.push(i)
    }
    return arr
  }

  checkAll() {
    const all = document.getElementById('orderListCheck') as any;
    const checkBoxes = document.getElementsByClassName('form-check-input') as any;

    if (all.checked === true) {
      for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = true;
      }
    } else if (all.checked === false) {
      for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = false;
      }
    }
  }

  deleteAllSelected() {
    const checkBoxes = document.getElementsByClassName('form-check-input') as any;
    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].checked) {
        this.adminUtil.deleteReview(checkBoxes[i].value)?.subscribe();
      }
    }
  }

  deleteReview(id: string) {
    this.adminUtil.deleteReview(id)
  }
}
