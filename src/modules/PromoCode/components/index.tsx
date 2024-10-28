import { FC } from "react";
import PromoCodeForm from "modules/PromoCode/components/PromoCodeForm";
import { IPromoCodeProps } from "modules/PromoCode/interfaces";

const PromoCode: FC<IPromoCodeProps> = (props) => {
  const { title, subtitle } = props || {};

  return (
    <>
      {title && <h3 className="container-title">{title}</h3>}
      {subtitle && <p className="container-subtitle">{subtitle}</p>}
      <PromoCodeForm {...props} />
    </>
  );
};

export default PromoCode;
