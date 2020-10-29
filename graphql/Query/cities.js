const knex = require('knex')(require('../../knexfile'));

const cities = () => knex('cities');
const cityById = (_, { city_id }) => knex('cities').where({ city_id }).first();

module.exports = { cities, cityById };
