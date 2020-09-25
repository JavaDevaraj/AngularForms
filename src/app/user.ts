export class User {
  constructor( 
    public userName: string,
    public email: string,
    public phoneNumber: number,
    public topics: string,
    public timePreference: string,
    public promotionalOffer: boolean,
    public address: Address
  ){}
}


export class Address {
  constructor(
    public street: string,
    public city: string,
    public state: string,
    public postalCode: number
  ) {}
}