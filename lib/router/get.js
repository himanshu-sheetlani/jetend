module.exports = function get(app, path, handler) {
  app.get(path, async (req, res) => {
    try {
      await handler(req, res);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};
