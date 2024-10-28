import { ChangeEvent, FC, memo, useCallback, useEffect, useState } from "react";
import { IAmountSelector } from "modules/PaymentMethod/interfaces";

import "./amountSelector.scss";
import AppButton from "modules/common/components/AppButton";

const addValues = [10, 20, 30, 50, 100];

const AmountSelector: FC<IAmountSelector> = ({
  limit,
  paymentLimit,
  onAmountChange,
}) => {
  const [value, setValue] = useState("0");

  useEffect(() => {
    onAmountChange(value);
  }, [onAmountChange, value]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const valueWithoutZero = event.target.value.replace(/^0+(?=\d)/, "");
      const eventValue = valueWithoutZero || "0";
      const inputValue = parseFloat(eventValue);
      const isAllowedValue = !isNaN(inputValue) && inputValue <= limit;
      setValue(isAllowedValue ? eventValue : String(limit));
    },
    [limit],
  );

  const addAmount = useCallback(
    (amount: number) => {
      setValue((prevValue) => {
        const numericValue = parseFloat(prevValue) + amount;
        const newValue = String(numericValue);
        return numericValue <= limit ? newValue : String(limit);
      });
    },
    [limit],
  );

  return (
    <div className="amount-selector-container">
      <h3>Amount</h3>
      <div className="amount-input-container">
        <div className="amount-input-wrapper">
          <input
            type="number"
            value={value}
            onChange={handleChange}
            className="amount-input"
            min={0}
          />
        </div>
      </div>
      <div className="amount-btns-wrapper">
        {addValues.map((addValue) => (
          <AppButton
            key={addValue}
            style={{ backgroundColor: "var(--gray)" }}
            onClick={() => addAmount(addValue)}
          >
            {`+ $${addValue}`}
          </AppButton>
        ))}
      </div>
      <span className="amount-info">{`From ${value} to ${paymentLimit} USD at a time`}</span>
    </div>
  );
};

export default memo(AmountSelector);
