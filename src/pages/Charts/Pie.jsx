import React from "react";
import { Pie as PieChart } from './../../components'
import { Header } from "../../components";

const Pie = () => {
  
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pie" title="Project Cost Breakdown" />
      <PieChart />
    </div>
  );
};

export default Pie;
