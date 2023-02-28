/* eslint-disable import/no-unresolved */
import { inject, injectable } from 'tsyringe';
import { PaymentCreateResponse } from 'mercadopago/resources/payment';
import { ICreateCardTransactionDTO } from '../../../../dto/ICreateCardTransactionDTO';
import { IPaymentProvider } from '../../../../shared/container/providers/PaymentProvider/IPaymentProvider';
import AppError from '../../../../shared/errors/AppError';

@injectable()
class CreateCardTransactionService {
  constructor(
    @inject('MercadoPagoProvider')
    private paymentProvider: IPaymentProvider
  ) {}

  async execute({
    transaction_amount,
    token,
    description,
    installments,
    payment_method_id,
    issuer_id,
    payer,
  }: ICreateCardTransactionDTO): Promise<PaymentCreateResponse> {
    try {
      const transaction = await this.paymentProvider.card({
        transaction_amount,
        token,
        description,
        installments,
        payment_method_id,
        issuer_id,
        payer,
      });

      return transaction;
    } catch (error) {
      let errorMessage = 'Causa de erro desconhecida';
      let errorStatus = 400;

      if (error.cause) {
        const sdkErrorMessage = error.cause[0].description;
        errorMessage = sdkErrorMessage || errorMessage;

        const sdkErrorStatus = error.status;
        errorStatus = sdkErrorStatus || errorStatus;
      }

      throw new AppError(errorMessage, errorStatus);
    }
  }
}

export { CreateCardTransactionService };
