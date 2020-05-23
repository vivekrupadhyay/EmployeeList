import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<[]> {
    return this.httpClient.get<[]>(this.url);
  }
}
