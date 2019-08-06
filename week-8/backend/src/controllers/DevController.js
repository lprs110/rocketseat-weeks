const axios = require('axios');
const Dev = require('../models/Dev');

/**
 * METODOS FUNDAMENTAIS:
 *
 * INDEX => Listar o recurso
 * SHOW => Retornar um ou mais recursos
 * STORE => Salvar um novo recurso
 * UPDATE => Atualizar um recurso
 * DELETE => Deletar um recurso
 *
 * Se estiver sendo criado uma nova função além dessas,
 * provavelmente é mais adequado criar um novo controller
 */

module.exports = {
  async index(req, res){
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        {_id: { $nin: loggedDev.likes } },
        {_id: { $nin: loggedDev.dislikes } },
      ]
    });

    return res.json(users);
  },


  async store(req, res){
    const { username } = req.body;

    const userExists = await Dev.findOne({ user: username });

    if(userExists){
      return res.json(userExists);
    }

    const response = await axios.get(`https://api.github.com/users/${username}`);

    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    });

    return res.json(dev);
  }
};
