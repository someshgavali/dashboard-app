import React from "react";
import "./topbar.css";

import { AiOutlineBell } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import somesh from "../../assets/somesh.jpeg";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">somesh</span>
        </div>
        <div className="topright">
          <div className="topbarIconContainer ">
            <AiOutlineBell />
            <span className="topIconBadge">5</span>
          </div>

          <div className="topbarIconContainer ">
            <MdLanguage />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer ">
            <AiFillSetting />
            <span className="topIconBadge">1</span>
          </div>

          <img src={somesh} alt="myimg" className="topAvtar" />
        </div>
      </div>
    </div>
  );
}
