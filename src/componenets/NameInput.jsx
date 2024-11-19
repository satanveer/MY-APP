import React from 'react';

function NameInput({ name, setName }) {
  return (
    <div className="mt-4">
      <label
        htmlFor="name"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Enter Your Name:
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          const trimmedValue = e.target.value.trimStart();
          setName(trimmedValue);
        }}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 bg-white text-gray-900"
      />
      <p className="mt-1 text-xs text-gray-500">
        Please provide your full name as it appears on official documents.
      </p>
    </div>
  );
}

export default NameInput;
