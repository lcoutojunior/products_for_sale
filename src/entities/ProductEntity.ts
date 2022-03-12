import { v4 as uuidv4 } from "uuid";
import { IsUUID, IsString, IsNumber } from "class-validator";

export default class Product {
    @IsUUID(4)
    public uuid: string;
    @IsString()
    private internal_code: string;
    @IsString()
    private name: string;
    @IsString()
    private brand: string;
    @IsString()
    public currency: string;
    @IsString()
    public previous_price: string;
    @IsString()
    public current_price: string;
    @IsNumber()
    private installments: number;
    @IsString()
    public installment_price: string;
    @IsNumber()
    private rating: number;
    @IsNumber()
    private reviews: number;


    constructor(
        internal_code: string,
        name: string,
        brand: string, 
        currency: string, 
        previous_price: string, 
        current_price: string, 
        installments: number, 
        installment_price: string, 
        rating: number, 
        reviews: number
    ) {

        this.uuid = uuidv4();
        this.internal_code = internal_code;
        this.name = name;
        this.brand = brand;
        this.currency = currency;
        this.previous_price = previous_price;
        this.current_price = current_price;
        this.installments = installments;
        this.installment_price = installment_price;
        this.rating = rating;
        this.reviews = reviews;
    }
    
}