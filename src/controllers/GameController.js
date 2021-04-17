const Game = require('../model/Game');

module.exports = {
    async index(req, res){
        try {
            const games = await Game.findAll();
    
            return res.json(games);
        } catch (error) {
            console.log(error);
        }
    },

    async store(req, res){
        try{
            const { title, price } = req.body;

            const game = await Game.create({ title, price });

            return res.json(game);
        } catch(err){
            console.error(err);
        }
    },

    async update(req, res){

        try {

            const { id } = req.params
            const { title, price } = req.body;

            if(!id || isNaN(id)){
                res.statusCode = 406;
                res.json({ errror: "Send the param id" });
            }

            const verify = await Game.findByPk(id);

            if(!verify){
                res.statusCode = 404;
                res.send({ errror: "Sorry, game not found :(" });
            }

            const game = await Game.update({ title, price },{ where: {id} });

            return res.json(game);
    
        } catch (error) {
            console.error(error);
        }

        
    },


    async delete(req, res){

        try {
            
            const { id } = req.params;

            if(!id || isNaN(id)){
                res.statusCode = 406;
                res.json({ errror: "Send the param id" });
            }

            const game = await Game.destroy({ where: {id}} )

            return res.json(game);

        } catch (error) {
            console.log(error);
        }
    }
}