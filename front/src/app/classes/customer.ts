export class Customer {

    
    private _id_customer : number;
    private _firstname : string;
    private _lastname : string;
    private _email : string;
    private _passwd : string;
    private _birthday : string;
    private _adresses : string[];

    constructor(
        id_customer : number = 0,
        firstname : string = "",
        lastname : string = "",
        email : string = "",
        passwd : string = "",
        birthday : string = "",
        adresses : string[] = []
    ){
        this._id_customer = id_customer;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        this._passwd = passwd;
        this._birthday = birthday;
        this._adresses = adresses;
    }
    


    public get id_customer() : number {
        return this._id_customer;
    }
    public set id_customer(v : number) {
        this._id_customer = v;
    }

    
    
    public get firstname() : string {
        return this._firstname;
    }
    public set firstname(v : string) {
        this._firstname = v;
    }

    
    
    public get lastname() : string {
        return this._lastname;
    }
    public set lastname(v : string) {
        this._lastname = v;
    }

    
    
    public get email() : string {
        return this._email;
    }
    public set email(v : string) {
        this._email = v;
    }

    
    
    public get passwd() : string {
        return this._passwd;
    }
    public set passwd(v : string) {
        this._passwd = v;
    }

    
    
    public get birthday() : string {
        return this._birthday;
    }
    public set birthday(v : string) {
        this._birthday = v;
    }

    public get adresses() : string[] {
        return this._adresses;
    }
    public set adresses(v : string[]) {
        this._adresses = v;
    }
    
    
}
