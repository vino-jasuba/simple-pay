import React from "react";

export default function StatusCell({ status }) {
  const statusColor = {
    success: "bg-green-200 text-green-800",
    processing: "bg-yellow-200 text-yellow-800",
    failed: "bg-gray-200 text-gray-800",
  };

  const className = `capitalize inline-block px-2 rounded-full text-sm ${statusColor[status]}`;

  return <span className={className}>{status}</span>;
}
