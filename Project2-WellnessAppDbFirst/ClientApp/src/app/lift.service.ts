import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Lift } from './lift/lift';

@Injectable({
  providedIn: 'root'
})
export class LiftService {
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

  }
  callLiftRandom(@Inject('BASE_URL') baseUrl: string): any {
    let response = this.http.get<Lift>(baseUrl+'api/Lift/')
    return response;
  }
}
