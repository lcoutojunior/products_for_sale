import Shoe from "./ShoeEntity";
import { IsString} from "class-validator";

export default class ShoeInternational extends Shoe {

    @IsString()
    private current_usd_price : string = "";
    @IsString()
    private current_eur_price : string = "";
    @IsString()
    private current_inr_price : string = "";
    @IsString()
    private created_at: string = "";
    @IsString()
    private updated_at: string = "";

    constructor(shoe: Shoe) {
        super(
            shoe.internal_code, 
            shoe.name, 
            shoe.brand, 
            shoe.currency, 
            shoe.previous_price, 
            shoe.current_price, 
            shoe.installments, 
            shoe.installment_price, 
            shoe.rating, 
            shoe.reviews, 
            shoe.gender, 
            shoe.available_qty, 
            shoe.locking_type, 
            shoe.sole_type, 
            shoe.colors_qty
        );        
    }

    public async setUsd(usdValue: string){
        this.current_usd_price = usdValue;
    }
    
    public async setEur(eurValue: string){
        this.current_eur_price = eurValue;
    }
    
    public async setInr(inrValue: string){
        this.current_inr_price = inrValue;
    }
    
    public async setCreatedAt(createdAt: string){
        this.created_at = createdAt;
    }

    public async setUpdatedAt(updatedAt: string){
        this.updated_at = updatedAt;
    }
}