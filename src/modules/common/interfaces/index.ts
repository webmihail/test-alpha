import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ICloseBtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  circled?: boolean;
}

export interface IBurgerMenuBarProps {
  isOpen: boolean;
  setIsOpen: (T: boolean) => void;
}

export interface IAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  backButtonName?: string;
  backButtonTo?: string;
  children: ReactNode;
}

export interface IArrowProps {
  rotation?: number;
  size?: number;
}
