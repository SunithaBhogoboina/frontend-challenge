import React, { useEffect, useState } from "react";
import DashboardGrid from "./DashboardGrid";
import { useDashboardStore } from "./store/Dashboard.store";
import { FormControl } from "@chakra-ui/react";
import AutoCompleteWrapper from "./AutoCompleteWrapper";
import { Heading } from "@chakra-ui/react";
import "./Dashboard.scss";

const Dashboard = () => {
  const allTickerData = useDashboardStore((state: any) => state.allTickerData);  
  const getAllTickerData = useDashboardStore((state: any) => state.getAllTickerData);
  const autoCompleteData = useDashboardStore((state: any) => state.autoCompleteData); 

  const columns = React.useMemo(() => [
    {
      id: 1,
      header: "Currency Pair",
      accessorKey: "currencyPair"
    },
    {
      id: 2,
      header: "Ask Price",
      accessorKey: "ask"
    },
    {
      id: 3,
      header: "Hourly",
      accessorKey: "hour"
    },
    {
      id: 4,
      header: "Daily",
      accessorKey: "day"
    },
    {
      id: 5,
      header: "Weekly",
      accessorKey: "week"
    },
    {
      id: 6,
      header: "Monthly",
      accessorKey: "month"
    }
  ],[]);

  useEffect(() => {
    getAllTickerData();
      // console.log("api data : " + dashboardGridData);
  }, []);

  return (
    <div className="dashboard-container">
      <Heading>Dashboard</Heading>
      <br />
      <FormControl>
        <AutoCompleteWrapper autoCompleteData={autoCompleteData} />
        
        <DashboardGrid columns={columns} data={allTickerData} />
      </FormControl>
        
    </div>
  );
};

export default Dashboard;
