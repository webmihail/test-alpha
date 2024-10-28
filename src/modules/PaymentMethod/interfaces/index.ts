import { TagType } from "modules/PaymentMethod/enums";

export interface ICardProps {
  name: string;
  image: string;
  hasTag: boolean;
  tagType: TagType;
  commission: number;
  limit: number;
  items?: ICardProps[];
}

export interface ITagProps {
  type: TagType;
}

export interface ICardModal extends ICardProps {
  isModalOpen: boolean;
  closeModal: () => void;
  backButtonName: string;
  items?: ICardProps[];
}

export interface IPaymentMethodSelectorProps {
  cardName: string;
  items?: ICardProps[];
  onMethodChange: (value: string) => void;
}

export interface IAmountSelector {
  limit: number;
  paymentLimit: number;
  onAmountChange: (value: string) => void;
}
