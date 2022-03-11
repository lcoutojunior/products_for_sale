import Shoe from "@entities/ShoeEntity";
import { v4 as uuidv4 } from "uuid";
const knexFile = require("../knexfile");
const knex = require('knex')(knexFile);

export default class ShoeModel {
    public static async readAll() {
        return await knex('shoes').select("*");
    }

    public static async read(uuid: string) {
        return await knex('shoes').select("*").where("uuid", uuid);
    }

    public static async create(shoe: Shoe) {
        await knex('shoes').insert({ ...shoe });
        return await knex('shoes').select("*").where("uuid", shoe.uuid);
    }

    public static async update(shoe: Shoe) {
        await knex('shoes').update({ ...shoe }).where("uuid", shoe.uuid);
        return await knex('shoes').select("*").where("uuid", shoe.uuid);
    }

    public static async delete(uuid: string) {
        return await knex('shoes').where("uuid", uuid).delete();
    }


}