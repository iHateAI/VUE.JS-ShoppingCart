const process = {
  login: (req, res) => {
    res.json({
      test: 'testdata',
    });
  },
  register: (req, res) => {
    const { email, pw, name } = req.body;
    res.json({
      email,
      pw,
      name,
    });
  },
};

module.exports = {
  process,
};
