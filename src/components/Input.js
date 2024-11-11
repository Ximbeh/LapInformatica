import React from 'react';

const InputComponent = ({ label, placeholder = '', onChange, error, errorMessage }) => {
  return (
    <div className="w-full mb-2">
      {label && (
        <label className="block text-lapBlue text-sm">
          {label}
        </label>
      )}
      <input
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className={`w-full border-2 rounded-[5px] bg-transparent placeholder-gray-300 text-black px-3 py-2 focus:outline-none 
          ${error ? 'border-red-500' : 'border-lapBlue'} 
          ${error ? 'focus:ring-red-500' : 'focus:ring-lapBlue'}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
    </div>
  );
};

export default InputComponent;
