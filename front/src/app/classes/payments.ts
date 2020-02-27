export class Payments {

    id_cart: Number;
    id_user: object;
    lastname: String;
    firstname: String;
    email: String;
    username: String;
    cards: {
        cardNumber: string,
        cardUserName: number,
        cardDate: number,
        cardSecretVerif: string
    }[];
    adresses: {
        adresse1: string,
        adresse2: number,
        codePostal: number,
        ville: string
    }[];

    constructor(data) {
        this.id_cart = data.id_cart;
        this.id_user = data.id_user;
        this.lastname = data.lastname;
        this.email = data.email;
        this.username = data.username;
        this.cards = data.cards;
        this.adresses = data.adresses;
    }
    // calculateTotalPrice() {
    //     this.total_price = 0
    //     this.products.forEach((p) => {
    //         this.total_price += p.price * p.qte;
    //     })
    // }



}

