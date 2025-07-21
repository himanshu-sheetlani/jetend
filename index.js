import './test.js'; // or './showcase.js'
import app from './lib/router/_app.js';
import get from './lib/router/get.js';
import post from './lib/router/post.js';
import patch from './lib/router/patch.js';
import del from './lib/router/delete.js';

export default {
  get,
  post,
  patch,
  del,
};

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Jetend server running at http://localhost:${PORT}`);
});
