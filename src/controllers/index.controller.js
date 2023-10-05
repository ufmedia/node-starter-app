const indexServices = require('../services/index.services');

async function get(req, res, next) {
  try {
      const data = await indexServices.get(req);
      res.json(data);
  } catch (err) {
      console.error(`Get Error`, err.message);
      next(err);
  }
}

async function post(req, res, next) {
  try {
    res.json(await indexServices.post(req.body));
  } catch (err) {
    console.error(`Post Error`, err.message);
    next(err);
  }
}


module.exports = {
  get,
  post,
}