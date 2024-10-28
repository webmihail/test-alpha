import mastercard from "assets/cards/master-card.svg";
import visa from "assets/cards/visa.svg";
import skrill from "assets/cards/skrill.svg";
import pm from "assets/cards/pm.svg";
import piastrix from "assets/cards/piastrix.svg";
import sticpay from "assets/cards/sticpay.svg";
import pin from "assets/cards/pin.svg";
import btc from "assets/crypto/btc.svg";
import eth from "assets/crypto/etherium.svg";
import tether from "assets/crypto/tether.svg";
import userLogo from "assets/common/user-logo.svg";

import { TagType } from "modules/PaymentMethod/enums";
import { ICardProps } from "modules/PaymentMethod/interfaces";
import { ITransaction } from "modules/Transactions/interfaces";
import { TransactionStatus } from "modules/Transactions/enums";

export const validPromoCode = "ALPHA2021";

export const cards: ICardProps[] = [
  {
    name: "Mastercard",
    image: mastercard,
    hasTag: true,
    tagType: TagType.Popular,
    commission: 3,
    limit: 906.0,
  },
  {
    name: "Visa",
    image: visa,
    hasTag: true,
    tagType: TagType.Trusted,
    commission: 3,
    limit: 906.0,
  },
  {
    name: "Skrill",
    image: skrill,
    hasTag: false,
    tagType: TagType.None,
    commission: 0,
    limit: 906.0,
  },
  {
    name: "Perfect Money, EUR",
    image: pm,
    hasTag: false,
    tagType: TagType.None,
    commission: 0,
    limit: 906.0,
  },
  {
    name: "Piastrix, EUR",
    image: piastrix,
    hasTag: false,
    tagType: TagType.None,
    commission: 0,
    limit: 906.0,
  },
  {
    name: "SticPay, EUR",
    image: sticpay,
    hasTag: false,
    tagType: TagType.None,
    commission: 0,
    limit: 906.0,
  },
  {
    name: "PIN",
    image: pin,
    hasTag: false,
    tagType: TagType.None,
    commission: 0,
    limit: 906.0,
  },
];

export const crypto: ICardProps[] = [
  {
    name: "BTC",
    image: btc,
    hasTag: false,
    tagType: TagType.None,
    commission: 0,
    limit: 906.0,
  },
  {
    name: "ETH",
    image: eth,
    hasTag: false,
    tagType: TagType.None,
    commission: 0,
    limit: 906.0,
  },
  {
    name: "USDT",
    image: tether,
    hasTag: false,
    tagType: TagType.None,
    commission: 0,
    limit: 906.0,
  },
];

export const user = {
  image: userLogo,
  balance: 125.02,
  discount: 13,
};

export const burgerBarMenu = [
  {
    name: "Casino Games",
    url: "/",
  },
  {
    name: "Live Games",
    url: "/",
  },
  {
    name: "TV-Bet",
    url: "/",
  },
  {
    name: "Sport Games",
    url: "/",
  },
  {
    name: "Virtual",
    url: "/",
  },
  {
    name: "Tournaments",
    url: "/",
  },
  {
    name: "Spin Shop",
    url: "/",
  },
  {
    name: "FAQ",
    url: "/",
  },
  {
    name: "Support Chat",
    url: "/",
  },
];

export const transactions: ITransaction[] = [
  {
    image: sticpay,
    withdraw: "SticPay",
    currency: "USD",
    transactionNumber: 142354,
    paymentDate: "2024-11-22T04:20:00",
    amount: 23.05,
    status: TransactionStatus.Processing,
  },
  {
    image: sticpay,
    withdraw: "SticPay",
    currency: "USD",
    transactionNumber: 142355,
    paymentDate: "2024-11-24T04:20:00",
    amount: 123.27,
    status: TransactionStatus.Active,
  },
  {
    image: mastercard,
    withdraw: "Mastercard",
    currency: "USD",
    transactionNumber: 23561,
    paymentDate: "2024-11-24T04:20:00",
    amount: 80,
    status: TransactionStatus.Performed,
  },
  {
    image: mastercard,
    withdraw: "Mastercard",
    currency: "USD",
    transactionNumber: 23562,
    paymentDate: "2024-11-25T09:20:00",
    amount: 120,
    status: TransactionStatus.Processing,
  },
  {
    image: mastercard,
    withdraw: "Mastercard",
    currency: "USD",
    transactionNumber: 23563,
    paymentDate: "2024-11-26T11:20:00",
    amount: 150,
    status: TransactionStatus.Performed,
  },
];

export const transactionsStatuses = [
  "All statuses",
  TransactionStatus.Active,
  TransactionStatus.Processing,
  TransactionStatus.Performed,
];
