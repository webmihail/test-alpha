import { FC } from "react";
import { ICloseBtnProps } from "modules/common/interfaces";

import "./closeButton.scss";

const CloseButton: FC<ICloseBtnProps> = ({ circled, ...props }) => {
  return (
    <button className={`close-btn ${circled ? "circled" : ""}`} {...props} />
  );
};

export default CloseButton;
