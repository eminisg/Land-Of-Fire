import { Injectable } from '@angular/core';
import {EmploymentInterface} from "../../../interfaces/employmen.interfacet";

@Injectable({
  providedIn: 'root'
})
export class AdminRestService {
  userCV?:EmploymentInterface[]
  openEdit?:boolean
  constructor() { }
}
