import { ButtonHTMLAttributes, FC } from "react";

import "./appButton.scss";

const AppButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
};

export default AppButton;
