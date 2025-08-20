import './test.js'; // or './showcase.js'
import app from './lib/router/_app.js';
import get from './lib/router/get.js';
import post from './lib/router/post.js';
import patch from './lib/router/patch.js';
import del from './lib/router/delete.js';
import db from './lib/db/_app.js';

export default {
  get,
  post,
  patch,
  del,
  db,
};

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Jetend server running at http://localhost:${PORT}`);
});
