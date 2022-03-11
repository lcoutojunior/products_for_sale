import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
        return await knex.schema.createTable("shoes", async function (table) {
          table.uuid("uuid").primary().notNullable();
          table.string("name").notNullable();
          table.string("brand").notNullable();
          table.string("currency").notNullable();
          table.string("previous_price").notNullable();
          table.string("current_price").notNullable();
          table.integer("installments").notNullable();
          table.string("installment_price").notNullable();
          table.float("rating").notNullable();
          table.integer("reviews").notNullable();
          table.string("gender").notNullable();
          table.integer("available_qty").notNullable();
          table.string("locking_type").notNullable();
          table.string("sole_type").notNullable();
          table.integer("colors_qty").notNullable();
          table.timestamp("created_dt").notNullable().defaultTo(knex.fn.now());
          table.timestamp("updated_dt").notNullable().defaultTo(knex.fn.now());
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("shoes");
}

