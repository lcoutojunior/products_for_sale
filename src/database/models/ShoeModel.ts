import Shoe from "@entities/ShoeEntity";
import { v4 as uuidv4 } from "uuid";
const knexFile = require("../knexfile");
const knex = require('knex')(knexFile);  

export default class ShoeModel{
    public static async create(shoe: Shoe) {        
        await knex('shoes').insert({...shoe});
        return await knex('shoes').select("*").where("uuid", shoe.uuid); 
    }
    
    public static async read(uuid?: string) {
        if(uuid){
            console.log("read ",uuid);
        }else{
            console.log("read all model");
        }
    }

    public static async update(uuid: string) {
        console.log("update model");
    }

    public static async delete(uuid: string) {
        console.log("delete model");
    }
    

}