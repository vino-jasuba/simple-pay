import React from "react";
import Icon from "./Icon";

const menuItems = [
  {
    title: "Home",
    icon: "home",
  },
  {
    title: "History",
    icon: "history",
  },
  {
    title: "Balances",
    icon: "balance",
  },
  {
    title: "Cards",
    icon: "credit-card",
  },
  {
    title: "Recipients",
    icon: "user-group",
  },
  {
    title: "Reports",
    icon: "document-reports",
  },
];

const utilities = [
  {
    title: "Settings",
    icon: "settings",
  },
  {
    title: "Help",
    icon: "help",
  },
  {
    title: "Privacy",
    icon: "shield",
  },
];

export default function Sidebar() {
  return (
    <div className="col-span-2 bg-teal-700 h-full">
      {/* Site Logo */}
      <div className="h-16 w-full flex items-center justify-center text-4xl text-teal-300">
        <span>Need Logo</span>
      </div>
      <ul className="border-b border-teal-800 pb-4">
        {menuItems.map((menuItem) => (
          <li className="text-teal-200 hover:text-teal-100 flex items-start mx-6 hover:bg-teal-800 px-3 py-2 rounded-md">
            <Icon name={menuItem.icon} />
            <span className="mx-4">{menuItem.title}</span>
          </li>
        ))}
      </ul>
      <ul className="pt-4">
        {utilities.map((menuItem) => (
          <li className="text-teal-200 hover:text-teal-100 flex items-start mx-6 hover:bg-teal-800 px-3 py-2 rounded-md">
            <Icon name={menuItem.icon} />
            <span className="mx-4">{menuItem.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
