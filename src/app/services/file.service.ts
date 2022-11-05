import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {getDownloadURL, getStorage, ref} from "@angular/fire/storage";
import {BehaviorSubject, from, Observable, of, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  imageURL: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  constructor(private http: HttpClient, private afStorage: AngularFireStorage) {
  }

  postImg(data: any, id: any) {
   return from (this.afStorage.upload('/rating/images' + id, data.image))
  }

  getRatingImg(id?:string):Observable<any> {
    const storage = getStorage()
    const starsRef = ref(storage,`/rating/images${id}`);
   return of(getDownloadURL(starsRef))
  }
}
