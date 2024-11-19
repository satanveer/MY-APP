import React from 'react';

function AgeSelect({ age, setAge }) {
  const ageOptions = [];
  for (let i = 1; i <= 100; i++) {
    ageOptions.push(i); 
  }

  return (
    <div className="my-4">
     
      <label
        htmlFor="age"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Age:
      </label>
      <select
        id="age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
        required
        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 px-3 py-2 bg-white text-gray-900"
      >
        <option value="" className=''>Select your age</option>
        {ageOptions.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <p className="text-xs text-gray-500 mt-1">
        Please select your age from the dropdown above.
      </p>
    </div>
  );
}

export default AgeSelect;
