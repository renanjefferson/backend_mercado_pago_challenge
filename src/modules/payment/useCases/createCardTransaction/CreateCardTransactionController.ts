import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCardTransactionService } from './CreateCardTransactionService';

class CreateCardTransactionController {
  async handleRequest(request: Request, response: Response): Promise<Response> {
    const paymentData = {
      transaction_amount: request.body.transaction_amount,
      token: request.body.token,
      description: request.body.description,
      installments: request.body.installments,
      payment_method_id: request.body.payment_method_id,
      issuer_id: String(request.body.issuer_id),
      payer: {
        email: request.body.payer.email,
        identification: {
          type: request.body.payer.identification.type,
          number: request.body.payer.identification.number,
        },
      },
    };

    const createCardTransactionService = container.resolve(
      CreateCardTransactionService
    );

    const transaction = await createCardTransactionService.execute(paymentData);

    return response.status(201).json(transaction);
  }
}

export { CreateCardTransactionController };
