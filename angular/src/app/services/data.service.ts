import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
const { appUrl } = environment

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get(appUrl + '/data/getCities')
  }

  getCompanyData():Observable<any>{
    return this.http.get(appUrl+'/data/getCompanyData')
  }
}
