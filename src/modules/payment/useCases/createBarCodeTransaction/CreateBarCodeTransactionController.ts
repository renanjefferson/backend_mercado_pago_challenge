import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateBarCodeTransactionService } from './CreateBarCodeTransactionService';

class CreateBarCodeTransactionController {
  async handleRequest(request: Request, response: Response): Promise<Response> {
    const paymentData = {
      transaction_amount: request.body.transaction_amount,
      description: request.body.description,
      installments: request.body.installments,
      payment_method_id: request.body.payment_method_id,
      payer: {
        email: request.body.payer.email,
        first_name: request.body.payer.first_name,
        last_name: request.body.payer.last_name,
        identification: {
          type: request.body.payer.identification.type,
          number: request.body.payer.identification.number,
        },
      },
    };

    const createBarCodeTransactionService = container.resolve(
      CreateBarCodeTransactionService
    );

    const transaction = await createBarCodeTransactionService.execute(
      paymentData
    );

    return response.status(201).json(transaction);
  }
}

export { CreateBarCodeTransactionController };
