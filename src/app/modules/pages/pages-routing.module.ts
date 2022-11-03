import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {QuoteComponent} from "./components/quote/quote.component";
import {EmploymentComponent} from "./components/employment/employment.component";
import {RatingComponent} from "./components/rating/rating.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quote', component: QuoteComponent},
  {path: 'employment', component: EmploymentComponent},
  {path: 'reviews', component: RatingComponent},
];

@NgModule({
  imports:[RouterModule.forChild(routes)]
})

export class PagesRoutingModule {

}
