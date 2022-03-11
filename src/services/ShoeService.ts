import Shoe from "@entities/ShoeEntity";
import ShoeModel from "@models/ShoeModel";
import e from "express";

export default class ShoeService {

    public static convertPrice() {

    }

    public static async getShoes() {
        let query = await ShoeModel.readAll();
        return {"products": query};
    }

    public static async getShoe(uuid: string) {
        let query = await ShoeModel.read(uuid);
        return {"product": query[0]};
    }

    public static async createShoe(shoe: Shoe) {
        //Checks if it is brazilian currency:
        let check1 = shoe.currency === "R$";
        let check2 = !shoe.current_price.includes(".");
        let check3 = !shoe.installment_price.includes(".");
        let check4 = !shoe.previous_price.includes(".");
        let brazilianCurrency = (check1 && check2 && check3 && check4);

        if (brazilianCurrency) {
            let query = await ShoeModel.create(shoe);
            return { "created": query[0] };
        } else {
            let response = [];
            !check1 ? response.push({ "currency": "not correct in brazilians price" }) : ""
            !check2 ? response.push({ "current_price": "not correct in brazilians price" }) : ""
            !check3 ? response.push({ "installment_price": "not correct in brazilians price" }) : ""
            !check4 ? response.push({ "previous_price": "not correct in brazilians price" }) : ""
            return response;
        }
    }

    public static async updateShoe(shoe: Shoe) {
        let query = await ShoeModel.update(shoe);
        return { "updated": query[0] };
    }

    public static async deleteShoe(uuid: string) {
        let query = await ShoeModel.delete(uuid);
        return { "deleted": query }
    }
}