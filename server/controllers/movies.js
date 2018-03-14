const rp = require('request-promise');

module.exports = {
  findByCinema: async (req, res) => {
    try {
      const movies = await rp(`http://webjetapitest.azurewebsites.net/api/${req.params.cinema}/movies`, {
        headers: {
          'x-access-token': 'sjd1HfkjU83ksdsm3802k'
        },
        timeout: 3000
        }
      );
      res.status(201).send(movies);
    } catch (err) {
      res.status(err.status || 500).send(err);
    }
  },
  findById: async (req, res) => {
    try {
      const movie = await rp(`http://webjetapitest.azurewebsites.net/api/${req.params.cinema}/movie/${req.params.id}`, {
        headers: {
          'x-access-token': 'sjd1HfkjU83ksdsm3802k'
        },
        timeout: 3000
        }
      );
      res.status(201).send(movie);
    } catch(err) {
      res.status(err.status || 500).send(err);
    }
  }
};
