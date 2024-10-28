import { FC, useCallback, useState } from "react";

import { ICardModal } from "modules/PaymentMethod/interfaces";
import AppModal from "modules/common/components/AppModal";
import { useUserBalance } from "providers/UserProvider.tsx";
import PaymentMethodSelector from "modules/PaymentMethod/components/PaymentMethodSelector";
import AmountSelector from "modules/PaymentMethod/components/AmountSelector";
import AppButton from "modules/common/components/AppButton";
import PromoCode from "modules/PromoCode/components";

import "./cardModal.scss";

const CardModal: FC<ICardModal> = ({
  isModalOpen,
  closeModal,
  backButtonName,
  name,
  items,
  limit,
}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [amount, setAmount] = useState(0);
  const { balance } = useUserBalance();

  const handlePaymentMethodChange = useCallback((method: string) => {
    setSelectedPaymentMethod(method);
  }, []);

  const handleAmountChange = useCallback((newAmount: string) => {
    setAmount(parseFloat(newAmount));
  }, []);

  const handleDeposit = useCallback(() => {
    console.log({
      method: selectedPaymentMethod,
      amount,
    });
  }, [amount, selectedPaymentMethod]);

  return (
    <AppModal
      isOpen={isModalOpen}
      onClose={closeModal}
      backButtonName={backButtonName}
    >
      <div className="app-modal-container">
        <div className="modal-balance">
          Current Balance:{" "}
          <div className="modal-balance-value">{`$ ${balance.toFixed(2)}`}</div>
        </div>
        <div className="modal-content-wrapper">
          <PaymentMethodSelector
            cardName={name}
            items={items}
            onMethodChange={handlePaymentMethodChange}
          />
          <AmountSelector
            limit={limit < balance ? limit : balance}
            paymentLimit={limit}
            onAmountChange={handleAmountChange}
          />
        </div>
        <div className="app-modal-promo-wrapper">
          <PromoCode title="Promo Code" />
        </div>
        <div className="modal-button-wrapper">
          <AppButton onClick={handleDeposit}>Deposit</AppButton>
        </div>
      </div>
    </AppModal>
  );
};

export default CardModal;
