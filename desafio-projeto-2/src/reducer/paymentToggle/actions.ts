export enum PaymentToggleReducerActions {
  Credit = "CREDIT_SELECTED",
  Debit = "DEBIT_SELECTED",
  Money = "MONEY_SELECTED",
}

export function selectCreditAction() {
  return {
    type: PaymentToggleReducerActions.Credit,
    payload: {
      isCreditSelected: true,
      isDebitSelected: false,
      isMoneySelected: false,
    },
  };
}

export function selectDebitAction() {
  return {
    type: PaymentToggleReducerActions.Debit,
    payload: {
      isCreditSelected: false,
      isDebitSelected: true,
      isMoneySelected: false,
    },
  };
}

export function selectMoneyAction() {
  return {
    type: PaymentToggleReducerActions.Money,
    payload: {
      isCreditSelected: false,
      isDebitSelected: false,
      isMoneySelected: true,
    },
  };
}
