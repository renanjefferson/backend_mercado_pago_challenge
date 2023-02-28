import { Router } from 'express';

import { CreateCardTransactionController } from '../modules/payment/useCases/createCardTransaction/CreateCardTransactionController';

const createCardTransactionController = new CreateCardTransactionController();

const paymentsRoutes = Router();

paymentsRoutes.post('/card', createCardTransactionController.handleRequest);

export default paymentsRoutes;
