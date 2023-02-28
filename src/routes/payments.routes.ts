import { Router } from 'express';

import { CreateBarCodeTransactionController } from '../modules/payment/useCases/createBarCodeTransaction/CreateBarCodeTransactionController';
import { CreateCardTransactionController } from '../modules/payment/useCases/createCardTransaction/CreateCardTransactionController';

const createBarCodeTransactionController =
  new CreateBarCodeTransactionController();
const createCardTransactionController = new CreateCardTransactionController();

const paymentsRoutes = Router();

paymentsRoutes.post(
  '/barcode',
  createBarCodeTransactionController.handleRequest
);
paymentsRoutes.post('/card', createCardTransactionController.handleRequest);

export default paymentsRoutes;
