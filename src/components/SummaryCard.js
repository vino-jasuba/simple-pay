import React from "react";
import Icon from "./Icon";

export default function SummaryCard({ icon, title, amount }) {
  return (
    <div className="col-span-1 h-40 bg-white rounded-lg overflow-hidden shadow-sm px-6 pt-8 pb-2 flex flex-col justify-between">
      <div className="flex items-center">
        <Icon name={icon} className="w-6 h-6 fill-current text-gray-600" />
        <div className="mx-4">
          <span className="block text-gray-600 text-sm font-semibold tracking-wide">
            {title}
          </span>
          <span className="block text-gray-900 text-xl font-semibold tracking-wide">{amount}</span>
        </div>
      </div>
      <a href="#viewall" className="text-teal-700">
        View all
      </a>
    </div>
  );
}
