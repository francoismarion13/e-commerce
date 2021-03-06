export class Category {

    
    private _id_category : number;
    private _name : string;
    private _description_short : string;
    private _id_produit : string[];

    constructor(
        id_category : number = 0,
        name : string = "",
        description_short : string = "",
        id_produit : string[] = []
    ){
        this._id_category = id_category;
        this._name = name;
        this._description_short = description_short;
        this._id_produit = id_produit;

    }


    public get id_category() : number {
        return this._id_category;
    }
    public set id_category(v : number) {
        this._id_category = v;
    }

    
    
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }

    
    
    public get description() : string {
        return this._description_short;
    }
    public set description(v : string) {
        this._description_short = v;
    }

    
    
    public get id_produit() : string[] {
        return this._id_produit;
    }
    public set id_produit(v : string[]) {
        this._id_produit = v;
    }
    
    
    
  /*   private _products : string;
    public get products() : string {
        return this._products;
    }
    public set products(v : string) {
        this._products = v;
    }
     */
    
}
