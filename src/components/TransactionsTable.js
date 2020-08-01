import React from "react";
import Table from "./Table";
import TransactionDescriptionCell from "./TransactionDescriptionCell";
import StatusCell from "./StatusCell";

export default function TransactionsTable({ transactions }) {
  const data = React.useMemo(() => transactions, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Transaction",
        accessor: (row, index) => row,
        Cell: ({
          value: {
            transactionType,
            principalAccount: { name },
          },
        }) => (
          <TransactionDescriptionCell
            transactionType={transactionType}
            name={name}
          />
        ),
      },
      {
        Header: "Amount",
        accessor: (row, index) => ({
          currency: row.currency,
          amount: row.amount,
        }),
        Cell: ({ value: { currency, amount } }) => {
          const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currency,
          });

          return <span>{formatter.format(amount)}</span>;
        },
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => <StatusCell status={value} />,
      },
      {
        Header: "Date",
        accessor: "date",
      },
    ],
    []
  );

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm mt-2">
      <Table className="w-full" data={data} columns={columns} />
    </div>
  );
}
