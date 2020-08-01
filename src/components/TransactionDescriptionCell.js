import React from "react";
import Icon from "./Icon";

export default function TransactionDescriptionCell({ transactionType, name }) {
  const messages = {
    sent: "Payment to",
    received: "Payment from",
    added_from_acc: "Added from account",
  };

  const icons = {
    received: "money",
    sent: "order-horizontal",
    added_from_acc: "plus-filled",
  };

  if (transactionType === "added_from_acc") {
    return (
      <div className="flex items-center">
        <Icon
          name={icons[transactionType]}
          className="w-6 h-6 fill-current text-gray-500"
        />
        <span className="ml-4">{`${messages[transactionType]}`} &bull;&bull;&bull;&bull;</span>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <Icon
        name={icons[transactionType]}
        className="w-6 h-6 fill-current text-gray-500"
      />
      <span className="ml-4">{`${messages[transactionType]} ${name}`}</span>
    </div>
  );
}
