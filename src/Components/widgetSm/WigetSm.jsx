import React from "react";
import "./WigetSm.css";
import somesh from "../../assets/somesh.jpeg";
import { MdVisibility } from "react-icons/md";

export default function WigetSm() {
  return (
    <div className="widgetSm two">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="WidgetSmListItem">
          <img src={somesh} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Somesh Gavali</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <MdVisibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="WidgetSmListItem">
          <img src={somesh} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Somesh Gavali</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <MdVisibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="WidgetSmListItem">
          <img src={somesh} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Somesh Gavali</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <MdVisibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="WidgetSmListItem">
          <img src={somesh} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Somesh Gavali</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <MdVisibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="WidgetSmListItem">
          <img src={somesh} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Somesh Gavali</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <MdVisibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
