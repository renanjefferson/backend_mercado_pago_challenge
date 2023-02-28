interface ICreateCardTransactionDTO {
  client_id?: string;
  client_secre?: string;
  transaction_amount: number;
  token: string;
  description: string;
  installments: number;
  payment_method_id: string;
  issuer_id: string;
  payer: {
    email: string;
    identification: {
      type: string;
      number: string;
    };
  };
}

export { ICreateCardTransactionDTO };
