export class User{
    constructor(public email:string,
                public name:string,
                private password : string){}

    matches(another: User) : boolean{
        return another !== undefined &&
        another.email === this.email &&
        another.password === this.password
    }            
}

export const users : {[key:string]: User} = {
    "andrecajuru@gmail.com": new User('andrecajuru@gmail.com', 'André','andre1980' ),
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana','juliana23' ),
     "amanda@gmail.com": new User('amanda@gmail.com', 'Amanda','amanda21' )
}