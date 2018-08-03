import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  getJSON(url: string, headers?: any): Observable<any> {
    if (headers) {
      let header_s: any = new HttpHeaders();
      for (let x in headers) {
        header_s = header_s.set(x, headers[x]);
      }
      return this.httpClient.get(url, { headers: header_s });
    } else {
      return this.httpClient.get(url);
    }
  }

  postJSON(url: string, data: any, headers?: any): Observable<any> {
    if (headers) {
      let header_s: any = new HttpHeaders();
      for (let x in headers) {
        header_s = header_s.set(x, headers[x]);
      }
      return this.httpClient.post(url, data, { headers: header_s });
    } else {
      return this.httpClient.post(url, data);
    }
  }

  putJSON(url: string, data: any, headers?: any): Observable<any> {
    if (headers) {
      let header_s: any = new HttpHeaders();
      for (let x in headers) {
        header_s = header_s.set(x, headers[x]);
      }
      return this.httpClient.put(url, data, { headers: header_s });
    } else {
      return this.httpClient.put(url, data);
    }
  }

  deleteJSON(url: string, headers?: any): Observable<any>{
    if (headers) {
      let header_s: any = new HttpHeaders();
      for (let x in headers) {
        header_s = header_s.set(x, headers[x]);
      }
      return this.httpClient.delete(url, { headers: header_s });
    } else {
      return this.httpClient.delete(url);
    }
  }
}
