const cleaner = require("knex-cleaner");

exports.seed = function (knex) {
  return cleaner.clean(knex, {
    mode: "truncate", // id'ler resetleniyor
    ignoreTables: ["knex_migrations", "knex_migrations_lock"], // migration tablolarını sıfırlamasını istemiyoruz, bu yüzden hariç tutuyoruz.
  });
};
