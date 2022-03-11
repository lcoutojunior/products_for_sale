import Shoe from "@entities/ShoeEntity";
import ShoeModel from "@models/ShoeModel";
import e from "express";

export default class ShoeService {

    public static convertPrice(){

    }

    public static async getShoes() {
    }

    public static async getShoe(uuid: string) {
        await ShoeModel.read(uuid);
    }

    public static async createShoe(shoe: Shoe) {
        //Checks if is brazilian currency:
        let check1 = shoe.currency === "R$";
        let check2 = !shoe.current_price.includes(".");
        let check3 = !shoe.installment_price.includes(".");
        let check4 = !shoe.previous_price.includes(".");
        let brazilianCurrency = (check1 && check2 && check3 && check4); 

        if(brazilianCurrency){
            let query = await ShoeModel.create(shoe);
            return {"created": query[0]};
        }else{
            let response = [];
            !check1 ? response.push({"currency": "not correct in brazilians price"}) : ""
            !check2 ? response.push({"current_price": "not correct in brazilians price"}) : ""
            !check3 ? response.push({"installment_price": "not correct in brazilians price"}) : ""
            !check4 ? response.push({"previous_price": "not correct in brazilians price"}) : ""
            return response;
        }



    }
}