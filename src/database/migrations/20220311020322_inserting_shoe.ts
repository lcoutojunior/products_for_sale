import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex('shoes').insert({
            uuid: "032f99a1-b70d-4e2b-a5bf-07002f550a0f",
            name: "Nike Shox R4",
            brand: "Nike",
            currency: "R$",
            previous_price: "749,99",
            current_price: "529,99",
            installments: 12,
            installment_price: "44,17",
            rating: 4.5,
            reviews: 540,
            gender: "Masculino",
            available_qty: 100,
            locking_type: "Cadarço",
            sole_type: "Borracha",
            colors_qty: 9
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex('shoes').where("uuid", "032f99a1-b70d-4e2b-a5bf-07002f550a0f").delete();
}

