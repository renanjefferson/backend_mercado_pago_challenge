interface ICreateBarCodeTransactionDTO {
  transaction_amount: number;
  description: string;
  installments: number;
  payment_method_id: string;
  payer: {
    email: string;
    first_name: string;
    last_name: string;
    identification: {
      type: string;
      number: string;
    };
  };
}

export { ICreateBarCodeTransactionDTO };
