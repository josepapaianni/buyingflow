const axios = require('axios');

module.exports.searchByTerm = term => axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${term}`);

module.exports.getItemById = id => axios.get(`https://api.mercadolibre.com/items/${id}`);

