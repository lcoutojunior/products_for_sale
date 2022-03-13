import Product from "./ProductEntity";
import { IsString, IsNumber } from "class-validator";

export default class Shoe extends Product {

    @IsString()
    public gender: string;
    @IsNumber()
    public available_qty: number;
    @IsString()
    public locking_type: string;
    @IsString()
    public sole_type: string;
    @IsNumber()
    public colors_qty: number;

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
        reviews: number,
        gender: string,
        available_qty: number,
        locking_type: string,
        sole_type: string,
        colors_qty: number


    ) {
        super(internal_code, name, brand, currency, previous_price, current_price, installments, installment_price, rating, reviews);

        this.gender = gender;
        this.available_qty = available_qty;
        this.locking_type = locking_type;
        this.sole_type = sole_type;
        this.colors_qty = colors_qty;
    }

}