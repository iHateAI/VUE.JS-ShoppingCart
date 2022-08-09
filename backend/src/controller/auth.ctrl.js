const process = {
  login: (req, res) => {
    res.json({
      test: 'testdata',
    });
  },
  register: (req, res) => {
    res.json({
      test: 'testsdf'
    })
  }
};

module.exports = {
  process,
};
