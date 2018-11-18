import {Injectable} from '@angular/core';
import {HttpClient, HttpParams}  from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import {Restaurant} from './restaurant/restaurant.model';
import { MenuItem} from '../restaurant-detail/menu-item/menu-item.model'

import {MEAT_API} from '../app.api'
import { Reviews } from 'app/restaurant-detail/reviews/reviews.model';

@Injectable()
export class RestaurantsService{
    
    constructor(private http:HttpClient){}

    restaurants(search?:string): Observable<Restaurant[]> {
      let params : HttpParams = undefined
      if(search){
        params = new HttpParams().append('q',search)
      }
      return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants/findAll`,{params:params})
      
    }

    restaurantById(id:string): Observable<Restaurant>{
      return this.http.get<Restaurant>(`${MEAT_API}/restaurants/findById/${id}`)
    }

    reviewsOfRestaurant(id:string): Observable<Reviews[]>{
      return this.http.get<Reviews[]>(`${MEAT_API}/reviews/reviewsOfRestaurant/${id}`)
      }

    menuOfRestaurant(id:string): Observable<MenuItem[]>{
      return  this.http.get<MenuItem[]>(`${MEAT_API}/menus/findMenusById/${id}`)
    }
}