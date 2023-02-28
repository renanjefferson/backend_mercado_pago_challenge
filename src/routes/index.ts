import { Router } from 'express';
import paymentsRoutes from './payments.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Mercado Pago API' });
});

routes.use('/payments', paymentsRoutes);

export { routes };
