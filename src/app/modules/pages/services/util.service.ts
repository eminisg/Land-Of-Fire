import {Injectable} from '@angular/core';
import {QuoteInterface} from "../../../interfaces/quote.interface";


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() {
  }

  // postQuoteData(id: string, data: QuoteInterface) {
  //   console.log('id and data', id, data)
  //   const db = getDatabase();
  //   return set(ref(db, 'quotes/' + id), data);
  // }

//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//   username: name,
//   email: email,
//   profile_picture : imageUrl
// });

  // postEmploymentData(id: string, data: QuoteInterface) {
  //   const db = getDatabase();
  //   return set(ref(db, 'employments/' + id), data);
  // }
}
