import { ReactNode } from "react";
import HeaderMenu from "../HeaderMenu";

import "./layout.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderMenu />
      <div className="layout-container">{children}</div>
    </>
  );
};

export default Layout;
