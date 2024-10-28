import { FC } from "react";

import AppButton from "modules/common/components/AppButton";
import Arrow from "modules/common/components/Arrow";
import { user } from "mockData";

import "./infoButton.scss";

export const InfoButton: FC = () => {
  return (
    <>
      <AppButton
        style={{
          backgroundColor: "var(--light-blue)",
          width: 125,
          height: 36,
          borderRadius: "3px 0 0 3px",
        }}
      >
        <div className="left-button-content">
          <div className="left-button-balance">{`${user.balance} $`}</div>
          <div className="left-button-discount">{`${user.discount}%`}</div>
          <Arrow rotation={270} size={16} />
        </div>
      </AppButton>
      <AppButton
        style={{
          backgroundColor: "var(--blue)",
          width: 36,
          height: 36,
          borderRadius: "0 3px 3px 0",
        }}
      >
        +
      </AppButton>
    </>
  );
};

export default InfoButton;
