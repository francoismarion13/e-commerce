
export class Cart {
    id_user: number;
    isValidate: boolean;
    products: {
        name: string,
        price: number,
        qte: number,
        img: string,
        _id: number
    }[];
    totalPrice: number;
    promo_code: number
    constructor(data) {
        this.id_user = data.id_user;
        this.isValidate = data.isValidate;
        this.products = data.products;
        this.totalPrice = data.total_price;
        this.promo_code = data.code_promo;
    }
    calculateTotalPrice() {
        this.totalPrice = 0
        this.products.forEach((p) => {
            this.totalPrice += p.price * p.qte;
        })
    }
    findOneAndDelete(){
        
        console.log(this.products)
    }


}
