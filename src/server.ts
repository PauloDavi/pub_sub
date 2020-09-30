import express from 'express';
import routes from './server/routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🚀 servidor iniciado na porta 3333');
});
