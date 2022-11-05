import {Injectable} from '@angular/core';
import {QuoteInterface} from "../../../interfaces/quote.interface";
import {DatabaseModule, Database, getDatabase, ref, set, onValue} from "@angular/fire/database";
import {FirebaseApp} from "@angular/fire/app";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor(private afApp: FirebaseApp, private data: Database, private dataBase: DatabaseModule) {
  }

  ratingDataSource: BehaviorSubject<any> = new BehaviorSubject<any>(null)


  postQuoteData(id?: string, data?: QuoteInterface) {
    const db = getDatabase();
    return set(ref(db, 'reviews/' + id), data);
  }

  getRatingData() {
    const db = getDatabase();
    const starCountRef = ref(db, 'reviews');
    onValue(starCountRef, (snapshot) => {
      let data = snapshot.val()
      this.ratingDataSource.next(data);
    });
  }
}
