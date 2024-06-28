import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { Observable, take } from 'rxjs';
import { ProductsResponse } from '../models/products-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }

  filter(params:string):Observable<ProductsResponse>{
    return this.http.get<any>(`${this.baseUrl}/products/filtro${params}`).pipe(take(1))
  }
}
