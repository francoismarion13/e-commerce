
export class Cart {
    id_user: string;
    is_validate: boolean;
    _id;
    products: {
        name: string,
        price: number,
        qte: number,
        img: string,
        _id
    }[];
    total_price: number;
    code_promo: number
    constructor(data) {
        this._id = data._id;
        this.id_user = data.id_user;
        this.is_validate = data.isValidate;
        this.products = data.products;
        this.total_price = data.total_price;
        this.code_promo = data.code_promo;
    }
    calculateTotalPrice() {
        this.total_price = 0
        this.products.forEach((p) => {
            this.total_price += p.price * p.qte;
        })
    }



}
