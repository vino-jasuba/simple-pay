import React from "react";
import TransactionsTable from "./TransactionsTable";
import TransactionFilters from "./TransactionFilters";

const transactions = [
  {
    amount: 20000,
    currency: "USD",
    status: "success",
    date: "May 5, 2020",
    principalAccount: {
      name: "Molly Sanders",
      account: "ABC-998-DEA",
    },
    transactionType: "received", // sent, received, added_from_acc
  },
  {
    amount: 19500,
    currency: "USD",
    status: "processing",
    date: "April 28, 2020",
    principalAccount: {
      name: "Doug Mann",
      account: "ABC-998-DEA",
    },
    transactionType: "sent", // sent, received, added_from_acc
  },
  {
    amount: 8750,
    currency: "USD",
    status: "success",
    date: "April 9, 2020",
    principalAccount: {
      name: "Erica Frost",
      account: "ABC-998-DEA",
    },
    transactionType: "sent", // sent, received, added_from_acc
  },
  {
    amount: 300,
    currency: "USD",
    status: "failed",
    date: "March 15, 2020",
    principalAccount: {
      name: "Molly Sanders",
      account: "ABC-998-DEA",
    },
    transactionType: "added_from_acc", // sent, received, added_from_acc
  },
  {
    amount: 20000,
    currency: "USD",
    status: "success",
    date: "February 19, 2020",
    principalAccount: {
      name: "Hank Douglas",
      account: "ABC-998-DEA",
    },
    transactionType: "received", // sent, received, added_from_acc
  },
];

export default function DashboardContentContainer() {
  return (
    <div className="mx-40 mt-12">
      {/* Filters */}
      <TransactionFilters />
      {/* Recent Activity Table */}
      <div className="mt-12">
        <h3 className="text-xl">Recent Activity</h3>
        {/* This component should be getting it's data as props */}
        <TransactionsTable transactions={transactions} />
      </div>
    </div>
  );
}
