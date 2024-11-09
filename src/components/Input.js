import React from 'react';

const InputComponent = ({ label, placeholder = '' }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-lapBlue mb-1">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border-2 border-lapBlue rounded-[5px] bg-transparent placeholder-gray-300 text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lapBlue"
      />
    </div>
  );
};

export default InputComponent;
