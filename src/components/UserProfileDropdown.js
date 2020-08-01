import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import Icon from "./Icon";

const UserAccountDropdown = () => {
  const [isOpen, toggleDropdown] = useState(false);

  const handleClick = (event) => toggleDropdown(!isOpen);

  UserAccountDropdown.handleClickOutside = () => toggleDropdown(false);

  return (
    <div class="relative inline-block text-left">
      <div>
        <span class="rounded-md shadow-sm">
          <button
            type="button"
            class="inline-flex justify-center items-center w-full rounded-md ml-1 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={handleClick}>
            Emilia Sande
            <Icon name="chevron-down" />
          </button>
        </span>
      </div>
      {isOpen && (
        <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
          <div class="rounded-md bg-white shadow-xs">
            <div
              class="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu">
              <a
                href="#/settings"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem">
                Account settings
              </a>
              <a
                href="#/support"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem">
                Support
              </a>
              <a
                href="#/license"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem">
                License
              </a>
              <form method="POST" action="#">
                <button
                  type="submit"
                  class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem">
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// This is a workaround of a known bug in react-onclickoutside -->  https://github.com/Pomax/react-onclickoutside/issues/327
UserAccountDropdown.prototype = {}

const clickOutsideConfig = {
  handleClickOutside: () => UserAccountDropdown.handleClickOutside
};

export default onClickOutside(UserAccountDropdown, clickOutsideConfig);