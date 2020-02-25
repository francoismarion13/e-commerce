export class User {
    private gender : string;
    private lastname : string;
    private firstname : string;
    private dateOfBirth : string;
    private username : string;
    private password : string;
    private email : string;
    private phone : string;
    private cards : any[];
    private adresses : any[];

    constructor(gen:string, ln:string, fn:string, dob:string, un:string, pwd:string, 
        e:string, p:string='', c: any[], a:any[]){
        this.gender = gen,
        this.lastname = ln,
        this.firstname = fn,
        this.dateOfBirth = dob,
        this.username = un,
        this.password = pwd,
        this.email = e,
        this.phone = p,
        this.cards = c,
        this.adresses = a
    }

    public get _gender() : string {
        return this.gender;
    }
    public set _gender(v : string) {
        this.gender = v;
    }

    public get _lastname() : string {
        return this.lastname;
    }
    public set _lastname(v : string) {
        this.lastname = v;
    }

    public get _firstname() : string {
        return this.firstname;
    }
    public set _firstname(v : string) {
        this.firstname = v;
    }

    public get _dateOfBirth() : string {
        return this.dateOfBirth;
    }
    public set _dateOfBirth(v : string) {
        this.dateOfBirth = v;
    }

    public get _username() : string {
        return this.username;
    }
    public set _username(v : string) {
        this.username = v;
    }

    public get _password() : string {
        return this.password;
    }
    public set _password(v : string) {
        this.password = v;
    }

    public get _email() : string {
        return this.email;
    }
    public set _email(v : string) {
        this.email = v;
    }

    public get _phone() : string {
        return this.phone;
    }
    public set _phone(v : string) {
        this.phone = v;
    }

    public get _cards() : any[] {
        return this.cards;
    }
    public set _cards(v : any[]) {
        this.cards = v;
    }

    public get _adresses() : any[] {
        return this.adresses;
    }
    public set _adresses(v : any[]) {
        this.adresses = v;
    }
}
