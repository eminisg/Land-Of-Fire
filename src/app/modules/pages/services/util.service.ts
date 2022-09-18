import {Injectable} from '@angular/core';
import {QuoteInterface} from "../../../interfaces/quote.interface";
import {DatabaseModule, Database, getDatabase, ref, set} from "@angular/fire/database";
import {FirebaseApp} from "@angular/fire/app";


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private afApp:FirebaseApp,private data:Database,private dataBase:DatabaseModule) {
  }

  postQuoteData(id: string, data: QuoteInterface) {
    const db = getDatabase();
   return set(ref(db, 'users/' + id), data);
  }

  // postEmploymentData(id: string, data: QuoteInterface) {
  //   const db = getDatabase();
  //   return set(ref(db, 'employments/' + id), data);
  // }
}
