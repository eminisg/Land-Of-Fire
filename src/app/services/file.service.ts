import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class FileService implements OnInit{

  constructor(private http:HttpClient,private afStorage:AngularFireStorage) { }

  ngOnInit() {
  }

  postImg(data:any,id:any){
    this.afStorage.upload('/files' + id , data.image);
  }
}
