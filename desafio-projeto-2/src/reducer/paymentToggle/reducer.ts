import { produce } from "immer";

export interface PaymentMethodToggleState {
  isDebitSelected: boolean;
  isCreditSelected: boolean;
  isMoneySelected: boolean;
}

export function paymentToggleReducer(
  state: PaymentMethodToggleState,
  action: any
) {
  return produce(state, (draft) => {
    draft.isCreditSelected = action.payload.isCreditSelected;
    draft.isDebitSelected = action.payload.isDebitSelected;
    draft.isMoneySelected = action.payload.isMoneySelected;
  });
}
