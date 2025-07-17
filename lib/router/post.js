module.exports = function post(app, path, handler) {
  app.post(path, async (req, res) => {
    try {
      await handler(req, res);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};
