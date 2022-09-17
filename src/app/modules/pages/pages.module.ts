import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./components/home/home.component";
import {EmploymentComponent} from "./components/employment/employment.component";
import {QuoteComponent} from "./components/quote/quote.component";
import {RatingComponent} from "./components/rating/rating.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quote', component: QuoteComponent},
  {path: 'employment', component: EmploymentComponent},
];

@NgModule({
  declarations: [
    HomeComponent,
    QuoteComponent,
    EmploymentComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
})
export class PagesModule { }
