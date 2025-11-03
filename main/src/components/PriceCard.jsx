import React from 'react';

export const PriceCard = ({ title, price, features }) => {
  return (
    <div className="bg-gray-400 text-black rounded-lg shadow-md p-6">
      <h1 calssName="text-2xl font-bold text-gray-800">Header</h1>
      <p className="text-gray-500">Description</p>
      <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
        Button
      </button>
    </div>
  );
};
