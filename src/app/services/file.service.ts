import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {getDownloadURL, getStorage, ref} from "@angular/fire/storage";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  ratingImgSource: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  constructor(private http: HttpClient, private afStorage: AngularFireStorage) {
  }





  postImg(data: any, id: any) {
    this.afStorage.upload('/files' + id, data.image);
  }

  getRatingImg(id:any) {
    const storage = getStorage()
    const starsRef = ref(storage, `files${id}`);
    getDownloadURL(starsRef).then((url: any) => {
      this.ratingImgSource.next(url);
    })
  }
}
