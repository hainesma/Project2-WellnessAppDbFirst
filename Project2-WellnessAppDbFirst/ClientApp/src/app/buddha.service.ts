import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import {BuddhaQuote} from './buddha/buddha'
@Injectable({
  providedIn: 'root'
})
export class BuddhaService {
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

  }

  callQuoteRandom(@Inject('BASE_URL') baseUrl: string): any {

    let response = this.http.get<BuddhaQuote>(baseUrl + 'api/Buddha')
    return response;
  }
}
