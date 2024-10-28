import { FC, memo } from "react";
import Select from "react-select";

import { IPaymentMethodSelectorProps } from "modules/PaymentMethod/interfaces";

import "./paymentMethodSelector.scss";

const PaymentMethodSelector: FC<IPaymentMethodSelectorProps> = ({
  cardName,
  items,
  onMethodChange,
}) => {
  const options = items?.map((card) => ({
    value: card.name,
    label: (
      <div className="custom-option">
        <img
          src={card.image}
          alt={card.name}
          style={{ width: 40, marginRight: 10 }}
        />
        <div className="custom-option-info">
          <span>{`${card.name}, USD • Commission ${card.commission}%`}</span>
          <span>Please notice that you will send money in the USD</span>
        </div>
      </div>
    ),
  }));

  const defaultOption = options?.find((option) => option.value === cardName);

  return (
    <Select
      defaultValue={defaultOption}
      classNamePrefix="modal-select"
      options={options}
      isSearchable={false}
      onChange={(e) => onMethodChange(e!.value)}
    />
  );
};

export default memo(PaymentMethodSelector);
