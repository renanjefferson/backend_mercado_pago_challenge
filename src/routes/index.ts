import { Router } from 'express';
import paymentsRoutes from './payments.routes';

const routes = Router();

routes.use('/payments', paymentsRoutes);

export { routes };
