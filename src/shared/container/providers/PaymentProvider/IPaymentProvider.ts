/* eslint-disable import/no-unresolved */
import { PaymentCreateResponse } from 'mercadopago/resources/payment';
import { ICreateBarCodeTransactionDTO } from '../../../../dto/ICreateBarCodeTransactionDTO';
import { ICreateCardTransactionDTO } from '../../../../dto/ICreateCardTransactionDTO';

interface IPaymentProvider {
  card(data: ICreateCardTransactionDTO): Promise<PaymentCreateResponse>;
  barCode(data: ICreateBarCodeTransactionDTO): Promise<PaymentCreateResponse>;
}

export { IPaymentProvider };
