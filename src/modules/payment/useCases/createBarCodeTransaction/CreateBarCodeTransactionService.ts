/* eslint-disable import/no-unresolved */
import { inject, injectable } from 'tsyringe';
import { PaymentCreateResponse } from 'mercadopago/resources/payment';
import { ICreateBarCodeTransactionDTO } from '../../../../dto/ICreateBarCodeTransactionDTO';
import { IPaymentProvider } from '../../../../shared/container/providers/PaymentProvider/IPaymentProvider';
import AppError from '../../../../shared/errors/AppError';

@injectable()
class CreateBarCodeTransactionService {
  constructor(
    @inject('MercadoPagoProvider')
    private paymentProvider: IPaymentProvider
  ) {}

  async execute({
    transaction_amount,
    description,
    installments,
    payment_method_id,
    payer,
  }: ICreateBarCodeTransactionDTO): Promise<PaymentCreateResponse> {
    try {
      const transaction = await this.paymentProvider.barCode({
        transaction_amount,
        description,
        installments,
        payment_method_id,
        payer,
      });

      return transaction;
    } catch (error) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export { CreateBarCodeTransactionService };
