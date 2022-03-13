import Shoe from "@entities/ShoeEntity";
import ShoeInternational from "@entities/ShoeInternationalEntity";
import ShoeModel from "@models/ShoeModel";
import e from "express";

export default class ShoeService {

    public static addPrices(shoe: any, createdAt: any, updatedAt: any) {
        let usdValue = 5.395398554;
        let eurValue = 6.365481624;
        let inrValue = 0.072413591;

        let currentPrice = parseFloat(shoe.current_price.replace(",","."));
        let currentUsdPrice = (currentPrice/usdValue).toString().replace(".",","); 
        let currentEurPrice = (currentPrice/eurValue).toString().replace(".",",");  
        let currentInrPrice = (currentPrice/inrValue).toString().replace(".",",");  

        let shoeInternational = new ShoeInternational(shoe);
        //Keeps the original uuid.
        shoeInternational.uuid = shoe.uuid
        shoeInternational.setUsd(currentUsdPrice);
        shoeInternational.setEur(currentEurPrice);
        shoeInternational.setInr(currentInrPrice);
        shoeInternational.setCreatedAt(createdAt);
        shoeInternational.setUpdatedAt(updatedAt);

        return shoeInternational;
    }

    public static async getShoes() {
        let query = await ShoeModel.readAll();
        let queryInternational = query.map( (shoe: any) => this.addPrices(shoe, shoe.created_at, shoe.updated_at));
        return queryInternational;
    }

    public static async getShoe(uuid: string) {
        let query = await ShoeModel.read(uuid);
        if(query.length > 0){
            return this.addPrices(query[0], query[0].created_at, query[0].updated_at);
        }else{
            return undefined;
        }
    }

    //Checks if it is brazilian currency:
    public static async brazilianCurrency(shoe: Shoe) {
        let check1 = shoe.currency === "R$";
        let check2 = !shoe.current_price.includes(".");
        let check3 = !shoe.installment_price.includes(".");
        let check4 = !shoe.previous_price.includes(".");
        let brazilianCurrency = (check1 && check2 && check3 && check4);

        if (brazilianCurrency) {
            return [];
        } else {
            let response = [];
            !check1 ? response.push({ "currency": "not correct in brazilians price" }) : ""
            !check2 ? response.push({ "current_price": "not correct in brazilians price" }) : ""
            !check3 ? response.push({ "installment_price": "not correct in brazilians price" }) : ""
            !check4 ? response.push({ "previous_price": "not correct in brazilians price" }) : ""
            return response;
        }
    }

    public static async createShoe(shoe: Shoe) {

        let isBrazilianCurrency = await this.brazilianCurrency(shoe);

        if (isBrazilianCurrency.length === 0) {
            let query = await ShoeModel.create(shoe);
            return this.addPrices(query[0], query[0].created_at, query[0].updated_at);
        } else {
            return isBrazilianCurrency;
        }
    }

    public static async updateShoe(shoe: Shoe) {
        let isBrazilianCurrency = await this.brazilianCurrency(shoe);
        if (isBrazilianCurrency.length === 0) {
            let query = await ShoeModel.update(shoe);
            if(query.length > 0){
                return this.addPrices(query[0], query[0].created_at, query[0].updated_at);
            }else{
                return undefined;
            }
        } else {
            return isBrazilianCurrency;
        }
    }

    public static async deleteShoe(uuid: string) {
        let query = await ShoeModel.delete(uuid);
        return query
    }
}