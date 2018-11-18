import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { RestaurantsService} from '../restaurants/restaurants.service';

import { Restaurant} from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService: RestaurantsService,
              private  rourte: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.rourte.snapshot.params['idRestaurant'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
