import { ChangeEvent, FC, FormEvent, memo, useCallback, useState } from "react";
import { z } from "zod";

import { validPromoCode } from "mockData";
import AppButton from "modules/common/components/AppButton";
import SuccessIcon from "assets/common/ok.svg?react";
import { IPromoCodeFormProps } from "modules/PromoCode/interfaces";

import "./promoCode.scss";

const PromoCodeForm: FC<IPromoCodeFormProps> = ({
  inputPlaceholder,
  btnName,
}) => {
  const [promoCode, setPromoCode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const promoCodeSchema = z.literal(validPromoCode);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.toUpperCase();
      setPromoCode(value);

      const result = promoCodeSchema.safeParse(value);
      setIsValid(result.success);
    },
    [promoCodeSchema],
  );

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (isValid) {
      console.log("Promo code applied:", promoCode);
    }
  };

  return (
    <form className={`promo-container`} onSubmit={handleSubmit}>
      <div className="promo-input-wrapper">
        <input
          type="text"
          placeholder={inputPlaceholder || "Enter promo code here"}
          value={promoCode}
          onChange={handleChange}
          className="promo-input"
        />
        {isValid && <SuccessIcon className="promo-validation-icon" />}
      </div>
      <div className="promo-button-container">
        <AppButton disabled={!isValid}>{btnName || "Apply"}</AppButton>
      </div>
    </form>
  );
};

export default memo(PromoCodeForm);
