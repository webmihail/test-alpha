import BurgerMenuBtn from "./BurgerMenuBtn";
import AppButton from "modules/common/components/AppButton";
import InfoButton from "modules/common/components/HeaderMenu/InfoButton";

import SearchButton from "assets/common/search.svg?react";
import GiftButton from "assets/common/gift.svg?react";
import RingButton from "assets/common/ring.svg?react";
import UserIcon from "assets/common/user-logo.svg?react";

import "./headerMenu.scss";

const HeaderMenu = () => {
  return (
    <div className="header-menu-container">
      <div className="header-menu-wrapper">
        <BurgerMenuBtn />
        <div className="header-right-menu">
          <div className="header-btn-wrapper">
            <AppButton style={{ backgroundColor: "var(--dark)" }}>
              <SearchButton />
            </AppButton>
          </div>
          <div className="header-btn-wrapper">
            <AppButton style={{ backgroundColor: "var(--dark)" }}>
              <GiftButton />
            </AppButton>
          </div>
          <div className="header-btn-wrapper marker">
            <AppButton style={{ backgroundColor: "var(--dark)" }}>
              <RingButton />
            </AppButton>
          </div>
          <InfoButton />
          <div className="header-user-icon">
            <UserIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
