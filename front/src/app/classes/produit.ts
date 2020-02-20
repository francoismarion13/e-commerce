export class Product {

    
    private _id_product : number;
    private _id_category : number;
    private _tax : number;
    private _on_sale : boolean;
    private _ean13 : string;
    private _qte : number;
    private _low_stock_alert : number;
    private _price : number;
    private _image : string;
    private _reduction : number;
    private _name : string;
    private _description_short : string;
    private _description : string;
    private _size : string;
    private _marque : string;

    constructor(
         id_product : number = 0,
         id_category : number =0,
         tax : number = 20,
         on_sale : boolean =false,
         ean13 : string = "",
         qte : number =0,
         low_stock_alert : number =0,
         price : number =0,
         image : string = "",
         reduction : number =0,
         title : string = "",
         description_short : string = "",
         description : string = "",
         size : string = "",
         marque : string = ""
    ){
        this._id_category = id_category;
        this._id_product = id_product;
        this._tax = tax;
        this._on_sale = on_sale;
        this._ean13 = ean13;
        this._qte = qte;
        this._low_stock_alert = low_stock_alert;
        this._price = price;
        this._image = image;
        this._reduction = reduction;
        this._name = title;
        this._description_short = description_short;
        this._description= description;
        this._size= size;
        this._marque= marque;


    }



    public get id_product() : number {
        return this._id_product;
    }
    public set id_product(v : number) {
        this._id_product = v;
    }

    
    
    public get id_category() : number {
        return this._id_category;
    }
    public set id_category(v : number) {
        this._id_category = v;
    }

    
    
    public get tax() : number {
        return this._tax;
    }
    public set tax(v : number) {
        this._tax = v;
    }
    
    
    
    public get on_sale() : boolean {
        return this._on_sale;
    }
    public set on_sale(v : boolean) {
        this._on_sale = v;
    }

    
    
    public get ean13() : string {
        return this._ean13;
    }
    public set ean13(v : string) {
        this._ean13 = v;
    }

    
    
    public get qte() : number {
        return this._qte;
    }
    public set qte(v : number) {
        this._qte = v;
    }

    
    
    public get low_stock_alert() : number {
        return this._low_stock_alert;
    }
    public set low_stock_alert(v : number) {
        this._low_stock_alert = v;
    }

    
    
    public get price() : number {
        return this._price;
    }
    public set price(v : number) {
        this._price = v;
    }

    
    
    public get image() : string {
        return this._image;
    }
    public set image(v : string) {
        this._image = v;
    }

    
    
    public get reduction() : number {
        return this._reduction;
    }
    public set reduction(v : number) {
        this._reduction = v;
    }

    
    
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }

    
    
    public get description_short() : string {
        return this._description_short;
    }
    public set description_short(v : string) {
        this._description_short = v;
    }

    
    
    public get description() : string {
        return this._description;
    }
    public set description(v : string) {
        this._description = v;
    }
    
    
    
    public get size() : string {
        return this._size;
    }
    public set size(v : string) {
        this._size = v;
    }

    
    
    public get marque() : string {
        return this._marque;
    }
    public set marque(v : string) {
        this._marque = v;
    }
    
    


    
    
    
    






    


    


    


    


    
    


    
    
    
    
    


}
