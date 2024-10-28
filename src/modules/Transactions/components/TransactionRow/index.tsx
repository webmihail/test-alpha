import { FC, useMemo } from "react";
import { ITransaction } from "modules/Transactions/interfaces";
import { TransactionStatus } from "modules/Transactions/enums";
import TransactionItem from "modules/Transactions/components/TransactionItem";
import dayjs from "dayjs";

import "./transactionRow.scss";

const TransactionRow: FC<ITransaction> = (props) => {
  const {
    status,
    image,
    withdraw,
    transactionNumber,
    paymentDate,
    amount,
    currency,
  } = props || {};

  const statusTitleColor = useMemo(() => {
    if (status === TransactionStatus.Active) return "var(--green)";
    if (status === TransactionStatus.Performed) return "var(--dark-blue)";
    if (status === TransactionStatus.Processing) return "var(--yellow)";
    return "var(--white)";
  }, [status]);

  return (
    <div className="transaction-row-container">
      <div className="transaction-mobile-label">
        <div className="transaction-image-wrapper">
          <img
            className="transaction-card-image"
            src={image}
            alt={`${withdraw} icon`}
          />
        </div>
        <TransactionItem
          title={status}
          description="Operation Status"
          textColor={statusTitleColor}
        />
      </div>
      <div className="transaction-items-wrapper">
        <div className="transaction-image-wrapper-bg">
          <img
            className="transaction-card-image"
            src={image}
            alt={`${withdraw} icon`}
          />
        </div>
        <TransactionItem
          title={`by ${withdraw}, ${currency}`}
          description="Withdraw"
        />
        <TransactionItem
          title={transactionNumber}
          description="Transaction Number"
        />
        <TransactionItem
          title={dayjs(paymentDate).format("DD.MM [at] h:mmA")}
          description="Payment Date"
        />
        <TransactionItem
          title={`${amount.toFixed(2)}$`}
          description="Amount Payed"
        />
        <TransactionItem
          title={status}
          description="Operation Status"
          textColor={statusTitleColor}
        />
      </div>
    </div>
  );
};

export default TransactionRow;
