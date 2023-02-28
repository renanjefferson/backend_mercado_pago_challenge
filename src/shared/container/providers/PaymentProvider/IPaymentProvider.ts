/* eslint-disable import/no-unresolved */
import { PaymentCreateResponse } from 'mercadopago/resources/payment';
import { ICreateCardTransactionDTO } from '../../../../dto/ICreateCardTransactionDTO';

interface IPaymentProvider {
  card(data: ICreateCardTransactionDTO): Promise<PaymentCreateResponse>;
  // barCode(data: requestBarCode): Promise<requestBarCode>;
}

export { IPaymentProvider };
