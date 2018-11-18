import { Restaurant } from "app/restaurants/restaurant/restaurant.model";

export interface MenuItem {
    
    idMenuItem: string
    name: string
    description: string
    price: number
    imagePath: string
    idRestaurant: Restaurant
}