import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public dataMonth;
  apiUrl = 'https://mindicador.cl/api';
  constructor(public http: HttpClient) { }

  getAllInsides(){
    return this.http.get(this.apiUrl).pipe(
      map((res:any) => {
        return res
      })
    )
  }

  getAllInsideFordate(id){
    return this.http.get(this.apiUrl + `/${id}`).pipe(
      map(resp => {
        return resp
      })
    )
  }

}
