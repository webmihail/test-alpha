import { FC } from "react";

import { cards, crypto } from "mockData";
import Card from "modules/PaymentMethod/components/Card";
import PromoCode from "modules/PromoCode/components";

import "./paymentMethod.scss";

const PaymentMethod: FC = () => {
  return (
    <div className="container-wrapper">
      <h2>Make a Deposit</h2>
      <div className="payment-wrapper">
        <h3 className="container-title">Choose payment method</h3>
        <h4 className="payment-block-name">Cards, E-Money, PIN</h4>
        <div className="payment-cards-container">
          {cards.map((item, index) => (
            <Card key={`${item.name}${index}`} {...item} items={cards} />
          ))}
        </div>
        <h4 className="payment-block-name">Cryptocurrency</h4>
        <div className="payment-cards-container">
          {crypto.map((item, index) => (
            <Card key={`${item.name}${index}`} {...item} items={crypto} />
          ))}
        </div>
      </div>
      <div className="payment-promo-wrapper">
        <PromoCode
          title="Have a promo code?"
          subtitle="Enter promo code here. It will activate a special bonus!"
        />
      </div>
    </div>
  );
};

export default PaymentMethod;
