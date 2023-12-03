import React from "react";
import "./../../App.css";
import "./Menu.scss";
import { MenuControl } from "../../components/MenuControl/MenuControl";

export const Menu = () => {
  return (
    <>
      <h1>Sample Menu's here MenuScreen</h1>
      <div className="menu-control">
        <MenuControl />
      </div>
    </>
  );
};
