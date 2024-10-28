import { FC } from "react";
import Select from "react-select";

import { ITransactionFilterProps } from "modules/Transactions/interfaces";
import { transactionsStatuses } from "mockData";

import "./transactionFilter.scss";

const TransactionsFilter: FC<ITransactionFilterProps> = ({
  onStatusChange,
}) => {
  const options = transactionsStatuses.map((status) => ({
    value: status,
    label: <div className="transaction-filter-custom-option">{status}</div>,
  }));

  return (
    <Select
      defaultValue={options[0]}
      classNamePrefix="transaction-filter-select"
      options={options}
      isSearchable={false}
      onChange={(e) => onStatusChange(e!.value)}
    />
  );
};

export default TransactionsFilter;
