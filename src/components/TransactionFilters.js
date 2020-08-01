import React from "react";
import SummaryCard from "./SummaryCard";

export default function TransactionFilters() {
  return (
    <div>
      <h3 className="text-xl">Overview</h3>
      <div className="grid grid-cols-3 gap-6 mt-2">
        <SummaryCard icon="scale" title="Account Balance" amount="$30,659.45" />
        <SummaryCard icon="refresh" title="Pending" amount="$-19,500.00" />
        <SummaryCard icon="check-circle" title="Processed (Last 30 days)" amount="$28,750.00"/>
      </div>
    </div>
  );
}
