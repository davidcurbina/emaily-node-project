module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  uri:'https://warm-dawn-86267.herokuapp.com/auth/google/callback',
  stripePubKey:process.env.STRIPE_PUB_KEY,
  stripeSecKey:process.env.STRIPE_SEC_KEY,
};
