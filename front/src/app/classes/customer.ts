export class Customer {
    private _gender : string;
    private _lastname : string;
    private _firstname : string;
    private _birthday : string;
    private _username : string;
    private _passwd : string;
    private _email : string;
    private _phone : string;
    private _cards : string[];
    private _adresses : string[];

    constructor(
        gender: string,
        lastname : string,
        firstname : string,
        birthday : string,
        email : string,
        username: string,
        passwd : string,
        phone: string = null,
        cards: string[],
        adresses : string[]
    ){
        this._gender = gender;
        this._lastname = lastname;
        this._firstname = firstname;
        this._email = email;
        this._username = username;
        this._passwd = passwd;
        this._phone = phone;
        this._birthday = birthday;
        this._cards = cards;
        this._adresses = adresses;
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
    
    public get cards() : string[] {
        return this._cards;
    }
    public set cards(v : string[]) {
        this._cards = v;
    }
    
    public get phone() : string {
        return this._phone;
    }
    public set phone(v : string) {
        this._phone = v;
    }
    
    public get username() : string {
        return this._username;
    }
    public set username(v : string) {
        this._username = v;
    }
    
    public get gender() : string {
        return this._gender;
    }
    public set gender(v : string) {
        this._gender = v;
    }
    
}
