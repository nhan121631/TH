const userService = require('../services/user.service');

exports.getUsers = (req, res) => {
  const users = userService.getAll();
  res.json(users);
};

exports.createUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  const user = userService.create(name);
  res.status(201).json(user);
};
