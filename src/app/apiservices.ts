import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServices {
  constructor(private http:HttpClient){}

  getFakeStoreItems() {
    return this.http.get('https://fakestoreapi.com/products/');
  }
}



