import { FC } from "react";
import { ITransactionItem } from "modules/Transactions/interfaces";

import "./transactionIcon.scss";

const TransactionItem: FC<ITransactionItem> = ({
  title,
  description,
  isUppercasedTitle = false,
  textColor,
}) => {
  return (
    <div className="transaction-item-container">
      <p
        className="transaction-item-title"
        style={{
          color: textColor,
          textTransform: isUppercasedTitle ? "uppercase" : "none",
        }}
      >
        {String(title)}
      </p>
      <p className="transaction-item-description">{description}</p>
    </div>
  );
};

export default TransactionItem;
