import React from "react";
import Icon from "./Icon";
import UserProfileDropdown from "./UserProfileDropdown";

const profileUrl =
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80";

export default function DashboardHeader() {
  return (
    <div className="h-48 bg-white shadow-sm">
      <div className="grid grid-cols-5 mx-40 border-b h-16">
        {/* Searchbar */}
        <div className="col-span-4 flex items-center">
          <Icon className="w-6 h-6 fill-current text-gray-500" name="search" />
          <input
            className="h-full w-full ml-4 form-input border-none"
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="Search transactions"
            autoComplete="off"
          />
        </div>
        {/*  Profile section */}
        <div className="col-span-1 flex items-center justify-end">
          <Icon
            className="mx-2 w-6 h-6 fill-current text-gray-500"
            name="notification"
          />
          <img
            className="mx-2 w-8 object-cover rounded-full"
            src={profileUrl}
            alt="Emilia Birch Profile Pic"
          />

          {/* Begin Dropdown */}
          <UserProfileDropdown />
          {/* End Dropdown */}
        </div>
      </div>

      {/* Profile Description & CTA  */}
      <div className="mx-40 my-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-20 h-20 rounded-full"
            src={profileUrl}
            alt="Emilia Sande Profile pic"
          />
          <div className="mx-4">
            <h3 className="text-lg">Good evening, Emilia Sande</h3>
            <div className="flex mt-1 justify-between">
              <div className="flex items-center mr-6">
                <Icon
                  className="w-6 h-5 fill-current text-gray-500"
                  name="apartment"
                />
                <span className="text-sm text-gray-700 ml-2">
                  Duke Street Studio
                </span>
              </div>
              <div className="flex items-center mr-6">
                <Icon
                  className="w-6 h-5 fill-current text-green-400"
                  name="ok-filled"
                />
                <span className="text-sm text-gray-700 ml-2">
                  Verified Account
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-56 flex justify-between">
          <button className="border p-2 rounded-md shadow-sm" type="submit">
            Add money
          </button>
          <button
            className="border p-2 rounded-md bg-teal-700 text-white shadow-sm"
            type="submit">
            Send money
          </button>
        </div>
      </div>
    </div>
  );
}
