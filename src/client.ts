import express from 'express';
import routes from './client/routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3334, () => {
  // eslint-disable-next-line no-console
  console.log('🚀 cliente iniciado na porta 3334');
});
