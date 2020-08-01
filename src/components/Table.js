import React from "react";
import { useTable } from "react-table";

export default function Table({ data, columns, className }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table className={className} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            className="uppercase text-gray-500 text-sm text-left h-12"
            {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="px-6" {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className="text-gray-600 h-16 border-t text-left" {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td className="px-6" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
