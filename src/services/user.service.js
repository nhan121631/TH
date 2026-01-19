let users = [
  { id: 1, name: 'Nhan' },
  { id: 2, name: 'An' }
];

exports.getAll = () => {
  return users;
};

exports.create = (name) => {
  const newUser = {
    id: Date.now(),
    name
  };
  users.push(newUser);
  return newUser;
};
