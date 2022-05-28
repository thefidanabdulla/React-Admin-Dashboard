import React from "react";
import { Stacked as StackedChart } from './../../components'
import { Header } from "../../components";

const Pie = () => {
  
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Stacked" title="Revenue Breakdown" />
      <StackedChart />
    </div>
  );
};

export default Pie;