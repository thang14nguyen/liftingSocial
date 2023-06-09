const app = require('./index');

const PORT = process.env.PORT || 3000;

const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server available at http://${HOST}:${PORT} \n`);
});
