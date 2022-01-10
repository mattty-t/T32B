const register = async (req, res) => {
  res.send('Register User');
};

const login = async (req, res) => {
  res.send('Login User');
};
const updateUser = async (req, res) => {
  res.send('updateUser ');
};

export { register, login, updateUser };
