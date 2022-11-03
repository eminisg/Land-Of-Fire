import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Auth, getAuth, signInWithEmailAndPassword, signOut} from "@angular/fire/auth";
import {RatingRequestInterface} from "../interfaces/ratingRequest.interface";

@Injectable({
  providedIn: 'root'
})
export class AdminUtilService {
  constructor(private http: HttpClient, private auth: Auth, private router: Router) {
  }

  getQuoteData(): Observable<any> {
    return this.http.get<any>('https://landoffire-c50e6-default-rtdb.firebaseio.com/quotes.json');
  }

  getReviewsData(): Observable<RatingRequestInterface> {
    return this.http.get<RatingRequestInterface>('https://landofffire-default-rtdb.firebaseio.com/reviews.json')
  }

  deleteReview(id: string) {
      return this.http.delete('https://landofffire-default-rtdb.firebaseio.com/' + 'reviews/' + id + '.json')
  }

  // deleteEmployment(id: string) {
  //     return this.http.delete('https://landoffire-c50e6-default-rtdb.firebaseio.com/' + 'employments/' + id + '.json')
  // }
  //
  // postUser(userData: any) {
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, userData.username, userData.password).then((userCredential: any) => {
  //     const access = userCredential.user.accessToken
  //     this.setAccessToken(access)
  //   }).catch((error) => {
  //
  //   })
  // }
  //
  // setAccessToken(access: string) {
  //   this.router.navigate(['admin/dashboard/quotes-table'])
  //   localStorage.setItem('access_token', access);
  // }
}
