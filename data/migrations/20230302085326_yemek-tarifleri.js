/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("tarifler", (tbl) => {
      tbl.increments();
      tbl.text("tarif_adi", 128).notNullable().unique();
      tbl.timestamp("kayit_tarihi", 128).defaultTo(knex.fn.now());
    })
    .createTable("adim", (tbl) => {
      tbl.increments();
      tbl.integer("adim_sirasi", 128).notNullable().unique().unsigned();
      tbl.text("adim_talimati", 128).notNullable().unique();
      tbl
        .integer("tarif_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tarifler")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("icindekiler", (tbl) => {
      tbl.increments();
      tbl.text("icindekiler_adi", 128).notNullable();
      tbl.integer("miktar", 128).notNullable();
    })
    .createTable("adimlar_icindekiler", (tbl) => {
      tbl
        .integer("icindekiler_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("icindekiler")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("adim_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("adim")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["icindekiler_id", "adim_id"]);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("adimlar_icindekiler")
    .dropTableIfExists("icindekiler")
    .dropTableIfExists("adimlar")
    .dropTableIfExists("tarifler");
};
