import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
        return await knex.schema.createTable("shoes", async function (table) {
          table.uuid("uuid").primary().notNullable();
          table.string("internal_code").unique().notNullable();
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
          table.timestamp("created_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP"));
          table.timestamp("updated_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("shoes");
}

