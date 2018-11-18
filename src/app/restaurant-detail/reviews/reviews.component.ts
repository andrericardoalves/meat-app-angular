import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestaurantsService} from './../../restaurants/restaurants.service';

import {Observable} from 'rxjs/Observable';
import { Reviews } from './reviews.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews : Observable<Reviews[]>
  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsService
                   .reviewsOfRestaurant(this.route.parent.snapshot.params['idRestaurant'])
  }

}
