import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  contactus(data: any): Observable<any> {
    return this.http.post('https://formspree.io/f/xbjbdbyz', data);
  }
  email(data: any): Observable<any> {
    return this.http.post('https://formspree.io/f/mnqrjrvo', {
      email: data,
    });
  }
  inquiry(data: any): Observable<any> {
    return this.http.post('https://formspree.io/f/xqkjejbo', data);
  }
}
