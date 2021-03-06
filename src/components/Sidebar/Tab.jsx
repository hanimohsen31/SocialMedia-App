import React, { useContext, useState, useEffect } from "react";
import { PalletContext } from "./../../store/PalletsContext";

import "./Tab.scss";
export const Tab = (props) => {
  const ctx = useContext(PalletContext)
  const [pallet, setPallet] = useState(ctx.defaultPallet);
  useEffect(() => {
    setPallet(ctx.defaultPallet);
  }, [ctx.defaultPallet]);

  return (
    <div className="Tab" style ={{color : pallet.textColorNoBg}}>
      <div className="tabIcon">{props.icon}</div>
      <div className="tabLabel">{props.label}</div>
    </div>
  );
};
