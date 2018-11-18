import { Restaurant } from "app/restaurants/restaurant/restaurant.model";

export class Reviews{
    idReview: number
    imagePath: string
    name: string
    description: string
    price: number
    restaurantId : Restaurant
}