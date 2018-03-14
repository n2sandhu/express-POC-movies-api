const movies = require('../controllers').movies;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Movies API!',
    }));
    app.get(`/api/movies/:cinema`, movies.findByCinema);
    app.get(`/api/movies/:cinema/:id`, movies.findById);
};
