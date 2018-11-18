import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestaurantsService} from '../../restaurants/restaurants.service';

import { MenuItem} from '../menu-Item/menu-item.model'

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]> 

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsService
      .menuOfRestaurant(this.route.parent.snapshot.params['idRestaurant'])
     
  }

  addMenuItem(item:MenuItem){
    console.log(item);
  }
}
