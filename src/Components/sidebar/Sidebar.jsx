import React from "react";
import "./Sidebar.css";
import { MdLineStyle } from "react-icons/md";
import { MdTimeline } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { AiOutlineTransaction } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { SiGooglemessages } from "react-icons/si";
import { FcManager } from "react-icons/fc";
import { MdReport } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <MdLineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <FiTrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem active">
                <FiUsers className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <MdOutlineProductionQuantityLimits className="sidebarIcon" />
                Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <AiOutlineTransaction className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <GoReport className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifiactions</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <AiFillMail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <VscFeedback className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <SiGooglemessages className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <FcManager className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdReport className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
