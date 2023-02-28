/* eslint-disable import/no-unresolved */
import { configurations, payment } from 'mercadopago';
import { PaymentCreateResponse } from 'mercadopago/resources/payment';
import { ICreateBarCodeTransactionDTO } from '../../../../../dto/ICreateBarCodeTransactionDTO';
import { IPaymentProvider } from '../IPaymentProvider';
import AppError from '../../../../errors/AppError';

class MercadoPagoProvider implements IPaymentProvider {
  constructor() {
    configurations.configure({
      client_id: `${process.env.CLIENT_ID}`,
      client_secret: `${process.env.CLIENT_SECRET}`,
    });

    // TODO: Validar o motivo do erro quando usa o process env no Access Token
    configurations.setAccessToken(
      'TEST-2486855849026097-022100-4102e89a0158f1926f0bc14f27afaa3e-1103772701'
    );
  }

  async card({
    transaction_amount,
    token,
    description,
    installments,
    payment_method_id,
    issuer_id,
    payer,
  }): Promise<PaymentCreateResponse> {
    const paymentData = {
      transaction_amount,
      token,
      description,
      installments,
      payment_method_id,
      issuer_id,
      payer: {
        email: payer.email,
        identification: {
          type: payer.identification.type,
          number: payer.identification.number,
        },
      },
    };

    try {
      const transaction = await payment.save(paymentData);
      const { response } = transaction;

      return response;
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

  async barCode({
    transaction_amount,
    description,
    installments,
    payment_method_id,
    payer,
  }): Promise<PaymentCreateResponse> {
    const paymentData: ICreateBarCodeTransactionDTO = {
      transaction_amount,
      description,
      installments,
      payment_method_id,
      payer: {
        email: payer.email,
        first_name: payer.first_name,
        last_name: payer.last_name,
        identification: {
          type: payer.identification.type,
          number: payer.identification.number,
        },
      },
    };

    try {
      const transaction = await payment.save(paymentData);
      const { response } = transaction;

      return response;
    } catch (error) {
      throw new AppError(error.cause[0].description, error.status);
    }
  }
}

export { MercadoPagoProvider };
