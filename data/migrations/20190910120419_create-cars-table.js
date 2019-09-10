
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('make', 128).notNullable();
      tbl.string('model', 128).notNullable();
      tbl.integer('mileage').notNullable();
      tbl.string('vin', 128).unique().notNullable();
      tbl.string('status', 128)
      tbl.string('transmission')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
