import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { IBurgerMenuBarProps } from "modules/common/interfaces";

import Logo from "assets/common/logo.svg?react";
import { burgerBarMenu } from "mockData";

import "./burgerMenuBtn.scss";
import "./burgerMenuBar.scss";
import CloseButton from "modules/common/components/CloseButton";

const BurgerMenuBar: FC<IBurgerMenuBarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-menu-header">
        <Logo className="burger-menu-logo" />
        <CloseButton onClick={() => setIsOpen(!isOpen)} circled />
      </div>
      {burgerBarMenu.map((item, index) => (
        <Link
          key={item.name + index}
          to={item.url}
          className="burger-menu-item"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

const BurgerMenuBtn: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="burger-btn-container">
        <button className="burger-btn" onClick={() => setIsOpen(!isOpen)}>
          <div className="burger-btn-view" />
        </button>
        <Logo className="burger-menu-logo" onClick={() => setIsOpen(!isOpen)} />
      </div>
      <BurgerMenuBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default BurgerMenuBtn;
