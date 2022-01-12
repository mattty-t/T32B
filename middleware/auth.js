const auth = async (req, res, next) => {
  console.log('req.authenticate user');
  next();
};

export default auth;
