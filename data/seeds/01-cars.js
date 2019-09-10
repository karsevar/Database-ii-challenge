
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'ford', model: 'fairlane', mileage: 30000, vin: '123kdfd123', transmission: 'Automatic'},
        {make: 'Austin Healey', model: 'Mark 3 3000', mileage: 10000, vin: '1233445d123', status:'salvage', transmission: 'Manual'},
        {make: 'MG', model: 'TD', mileage: 60000, vin: '123kdfd15623', status: 'clean', transmission: 'Manual'},
      ]);
    });
};
