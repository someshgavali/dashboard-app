import React from "react";
import Chart from "../../Components/chart/Chart";
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../dummyData";
import WigetSm from "../../Components/widgetSm/WigetSm";
import WigetLg from "../../Components/wigetLg/WigetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWedgets">
        <WigetSm />
        <WigetLg />
      </div>
    </div>
  );
}
