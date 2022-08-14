exports.createUser = (req, res) => {
  const { username, password, name } = req.body;
  res.status(200).json({
    message: 'Create user successfully',
    user: req.body,
  });
};
