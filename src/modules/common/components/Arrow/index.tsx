import { FC } from "react";

import { IArrowProps } from "modules/common/interfaces";

import "./arrow.scss";

const Arrow: FC<IArrowProps> = ({ rotation = 0, size = 20 }) => {
  return (
    <div
      className="arrow"
      style={{
        transform: `rotate(${rotation}deg)`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default Arrow;
