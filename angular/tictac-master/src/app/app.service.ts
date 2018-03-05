import {  Injectable } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class appService {

  constructor() { }
  url='localhost:8888'

  getPlayer(): string {
    return "Hello world";
  }
  getAllPatients()
  {
    // return this.http.get('/players').map((res)=>res.json());

  }



}



