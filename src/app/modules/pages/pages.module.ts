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
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../../../environments/environment";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getDatabase, provideDatabase} from "@angular/fire/database";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getStorage, provideStorage} from "@angular/fire/storage";
import {PagesRoutingModule} from "./pages-routing.module";

@NgModule({
  declarations: [
    HomeComponent,
    QuoteComponent,
    EmploymentComponent,
    RatingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PagesRoutingModule,
    SlickCarouselModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  exports:[RouterModule],
})
export class PagesModule { }
