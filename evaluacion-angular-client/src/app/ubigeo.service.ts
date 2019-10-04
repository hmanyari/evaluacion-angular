import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<any> {
    return this.http.get(this.baseUrl + '/departamentos');
  }

  getProvincias(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/departamentos/' + id);
  }

  getDistritos(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/provincias/' + id);
  }
}
