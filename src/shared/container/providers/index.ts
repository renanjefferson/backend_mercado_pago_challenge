import { container } from 'tsyringe';
import { MercadoPagoProvider } from './PaymentProvider/implamentations/MercadoPagoProvider';
import { IPaymentProvider } from './PaymentProvider/IPaymentProvider';

container.registerInstance<IPaymentProvider>(
  'MercadoPagoProvider',
  new MercadoPagoProvider()
);
