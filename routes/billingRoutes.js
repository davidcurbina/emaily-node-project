const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app =>{
  app.post(
    '/api/stripe', requireLogin, 
    async (req, res)=>{
      const charge = await stripe.charges.create({
        amount:500,
        currency:'usd',
        description:'Purchased $5.00 of credit',
        source: req.body.id
      });
      
      req.user.credits += 5;
      const user = await req.user.save();
      
      res.send(user);
    }
  );
};