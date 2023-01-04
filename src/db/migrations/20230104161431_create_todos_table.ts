import { Knex } from "knex";

//Creating a table and adding the params. Telling postgres that in the table, each todo will have a unique identifier which is a primary key, and not nullable. uuid generate v4 means that inside of postgresql, it is going to generate a unique idfentifier

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("todos", (table) => {
    table
      .uuid("id")
      .primary()
      .notNullable()
      .defaultTo(knex.raw("uuid_generate_v4()"));

    table.string("title").notNullable();

    table.boolean("done").notNullable().defaultTo("false");

    table.timestamp('created_at').notNullable();
    table.timestamp('updated_at').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('todos');
}
