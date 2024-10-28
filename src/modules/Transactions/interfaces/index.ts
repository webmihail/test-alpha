import { TransactionStatus } from "modules/Transactions/enums";

export interface ITransaction {
  image: string;
  withdraw: string;
  currency: string;
  transactionNumber: number;
  paymentDate: string;
  amount: number;
  status: TransactionStatus;
}

export interface ITransactionItem {
  title: string | number;
  description: string;
  isUppercasedTitle?: boolean;
  textColor?: string;
}

export interface ITransactionFilterProps {
  onStatusChange: (status: string) => void;
}
