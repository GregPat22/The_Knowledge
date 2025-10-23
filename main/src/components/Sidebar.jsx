import React from 'react';
import dashboardIcon from '../assets/dashboardIcon.png';
import book from '../assets/book.png';
import writer from '../assets/writer.png';
import bulb from '../assets/bulb.png';
import creditCard from '../assets/credit-card.png';
import appreciationIcon from '../assets/appreciation.png';
import opinions from '../assets/opinions.png';

export const Sidebar = () => {
  return (
    <>
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-300 rounded-lg sm:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="cta-button-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-black border-r border-gray-600">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-800 group"
              >
                <img
                  src={dashboardIcon}
                  alt="Dashboard"
                  class="w-5 h-5 brightness-0 invert opacity-60 group-hover:opacity-100 transition duration-75 group-hover:text-yellow-400"
                />
                <span class="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-800 group"
              >
                <img
                  src={book}
                  alt="Open Book"
                  class="w-5 h-5 brightness-0 invert opacity-60 group-hover:opacity-100 transition duration-75 group-hover:text-yellow-400"
                />
                <span class="flex-1 ms-3 whitespace-nowrap">My Knowledge</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-800 group"
              >
                <img
                  src={opinions}
                  alt="opinions"
                  class="w-5 h-5 brightness-0 invert opacity-60 group-hover:opacity-100 transition duration-75 group-hover:text-yellow-400"
                />
                <span class="flex-1 ms-3 whitespace-nowrap">Opinions</span>
                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-black bg-yellow-400 rounded-full">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-800 group"
              >
                <img
                  src={writer}
                  alt="Personal Writings"
                  class="w-5 h-5 brightness-0 invert opacity-60 group-hover:opacity-100 transition duration-75 group-hover:text-yellow-400"
                />
                <span class="flex-1 ms-3 whitespace-nowrap">
                  Personal Writings
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-800 group"
              >
                <img
                  src={bulb}
                  alt="Products"
                  class="w-5 h-5 brightness-0 invert opacity-60 group-hover:opacity-100 transition duration-75 group-hover:text-yellow-400"
                />
                <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-800 group"
              >
                <img
                  src={creditCard}
                  alt="Credit Card"
                  class="w-5 h-5 brightness-0 invert opacity-60 group-hover:opacity-100 transition duration-75 group-hover:text-yellow-400"
                />
                <span class="flex-1 ms-3 whitespace-nowrap">Payment</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-800 group"
              >
                <img
                  src={appreciationIcon}
                  alt="Appreciation"
                  class="w-5 h-5 brightness-0 invert opacity-60 group-hover:opacity-100 transition duration-75 group-hover:text-yellow-400"
                />
                <span class="flex-1 ms-3 whitespace-nowrap">Appreciations</span>
              </a>
            </li>
          </ul>
          <div
            id="dropdown-cta"
            class="p-4 mt-6 rounded-lg bg-gray-900 border border-gray-600"
            role="alert"
          >
            <div class="flex items-center mb-3">
              <span class="bg-yellow-400 text-black text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm">
                Beta
              </span>
              <button
                type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-gray-800 inline-flex justify-center items-center w-6 h-6 text-gray-300 rounded-lg focus:ring-2 focus:ring-gray-600 p-1 hover:bg-gray-700"
                data-dismiss-target="#dropdown-cta"
                aria-label="Close"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="w-2.5 h-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <p class="mb-3 text-sm text-gray-300">The Knowledge</p>
            <a
              class="text-sm text-gray-300 underline font-medium hover:text-yellow-400"
              href="#"
            >
              The Knowledge
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
