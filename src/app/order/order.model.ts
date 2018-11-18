import { User } from "app/security/login/user.model";

class Orders{

    public idOrder: string
    public user:User
    public address :Address
    public paymentOption: string
    public orderItems :OrderItem[] = []
    public id? : string
    
    constructor( ){}
}

class OrderItem{
    constructor(public quantity: number, public menuId: string){}
}

class Address{
    constructor(
    public street: string,
    public number: number,
    public optionalAddress: string,
    public city?: string,
    public state?:string,
    public zipCode?:string){}
}

export{Orders,OrderItem,Address}