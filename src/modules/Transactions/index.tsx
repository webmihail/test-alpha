import { FC, useCallback, useMemo, useState } from "react";

import AppButton from "modules/common/components/AppButton";
import FilterIcon from "assets/common/filter.svg?react";

import "./transactions.scss";
import { transactions, transactionsStatuses } from "mockData";
import TransactionRow from "modules/Transactions/components/TransactionRow";
import TransactionsFilter from "modules/Transactions/components/TransactionFilter";

const Transactions: FC = () => {
  const [limit, setLimit] = useState(3);
  const [openFilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState({ status: transactionsStatuses[0] });

  const limitedAndFilteredTransactions = useMemo(() => {
    const transactionByLimit = transactions.slice(0, limit);
    if (filter.status === transactionsStatuses[0]) {
      return transactionByLimit;
    }

    return transactionByLimit.filter((item) => item.status === filter.status);
  }, [filter.status, limit]);

  const handleFilterStatusChange = useCallback((choosesStatus: string) => {
    setFilter((prev) => ({ ...prev, status: choosesStatus }));
  }, []);

  return (
    <div className="container-wrapper">
      <div className="transaction-title-wrapper">
        <h3>Transactions</h3>
        <div className="transaction-filer-btn-wrapper">
          <AppButton
            onClick={() => setOpenFilter(!openFilter)}
            style={{ backgroundColor: "var(--gray)" }}
          >
            <FilterIcon className="filter-icon" />
          </AppButton>
        </div>
      </div>
      {openFilter && (
        <TransactionsFilter onStatusChange={handleFilterStatusChange} />
      )}
      {limitedAndFilteredTransactions.map((item, index) => (
        <TransactionRow key={item.transactionNumber + index} {...item} />
      ))}
      {limit !== transactions.length && (
        <div className="transaction-button-wrapper">
          <AppButton onClick={() => setLimit(transactions.length)}>
            Show More
          </AppButton>
        </div>
      )}
    </div>
  );
};

export default Transactions;
