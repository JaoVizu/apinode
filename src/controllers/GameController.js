const Game = require('../models/Game');


module.exports = {
    async index(request, response){
        const games = await Game.find();
        
        return response.json(games);
    },

    async store(request, response){
        const { name, description, genre, release_date } = request.body;

        let game = await Game.create({
            name, 
            description,
            genre,
            release_date,
            created_at : Date.now()
        });

        return response.json(game);
    },

    async update(request, response){
        let game = {
            name : request.body.name,
            description : request.body.description,
            genre : request.body.genre,
            release_date : request.body.release_date
        }

        await Game.updateOne( {_id: request.params.id}, game, (error, success) => {
            if (error) response.json(error)
            else response.json(success);
        })
    },

    async destroy(request, response){
        await Game.deleteOne({ _id: request.params.id}, (error, success) => {
            if (error) throw response.json(error)
            else response.json(success)
        })
    }
}