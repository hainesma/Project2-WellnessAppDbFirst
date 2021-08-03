import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Kanye} from './kanye/Kanye'

@Injectable({
  providedIn: 'root'
})
export class KanyeService {
  constructor(private http: HttpClient) { }
  public apiBase: string = "https://api.kanye.rest/";
  response

  callKayne() {

   let response = this.http.get<Kanye>(this.apiBase);
    return response;
  }

}
