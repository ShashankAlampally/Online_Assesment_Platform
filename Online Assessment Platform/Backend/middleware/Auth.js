const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    var authHeader = req.headers.authorization;
    console.log(authHeader);
    if (!authHeader) {
     return res.status(401).json({
          status: 401,
          message: 'Unauthorized!',
        });
    }   
    try {
      const user = jwt.verify(authHeader, 'shhhhhh');
      if(!user){
        return res.status(401).json({
          status: 401,
          message: 'Unauthorized!',
        });
      }
      next();
    } catch (error) {
      return res.status(401).json({
          status: 401,
          message: 'Unauthorized!',
        });
    }
  };