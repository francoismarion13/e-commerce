export class Category {

    
    private _id_category : number;
    public get id_category() : number {
        return this._id_category;
    }
    public set id_category(v : number) {
        this._id_category = v;
    }

    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }

    
    private _description : string;
    public get description() : string {
        return this._description;
    }
    public set description(v : string) {
        this._description = v;
    }
    
    
    
}
