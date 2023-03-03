/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tarifler").insert([{ tarif_adi: "Spagetti Bolonez" }]);
  await knex("adim").insert([
    {
      tarif_id: 1,
      adim_sirasi: 1,
      adim_talimati: "Büyük bir tencereyi orta ateşe koyun",
    },
    {
      tarif_id: 1,
      adim_sirasi: 2,
      adim_talimati: "1 yemek kaşığı zeytinyağı ekleyin",
    },
  ]);
  await knex("icindekiler").insert([
    { icindekiler_adi: "zeytinyağı", miktar: 0.014 },
  ]);

  await knex("adimlar_icindekiler").insert([
    { adim_id: 1, icindekiler_id: 1 },
    { adim_id: 1, icindekiler_id: 2 },
  ]);
};

// {
//   "tarif_id" : 1,
//   "tarif_adi": "Spagetti Bolonez",
//   "kayit_tarihi": "2021-01-01 08:23:19.120",
//   "adimlar": [
//     {
//       "adim_id": 11,
//       "adim_sirasi": 1,
//       "adim_talimati": "Büyük bir tencereyi orta ateşe koyun",
//       "icindekiler": []
//     },
//     {
//       "adim_id": 12,
//       "adim_sirasi": 2,
//       "adim_talimati": "1 yemek kaşığı zeytinyağı ekleyin",
//       "icindekiler": [
//         { "icindekiler_id": 27, "icindekiler_adi": "zeytinyağı", "miktar": 0.014 }
//       ]
//     },
//   ]
// }
