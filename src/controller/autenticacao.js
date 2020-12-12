const auth = (req, res) => {
    const authHeader = req.get('authorization')
    
    if (!authHeader) {
      return res.status(401).send('Acesso negado: realize o login');
    };
    const token = authHeader.split(' ')[1];
    console.log(token)
    return token
  };
  
  module.exports = { auth };