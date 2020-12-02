const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, responce, body) => {
    if (error) {
      return callback(error, body);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        return callback(error, "no cats(((");
      } else {
        return callback(error, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };