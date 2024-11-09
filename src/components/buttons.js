import React from 'react';

const FullButton = ({ text }) => {
  return (
    <button className="w-full bg-lapBlue text-gray-100 rounded-[5px] py-2 px-4">
      {text}
    </button>
  );
};

const HalfButton = ({ text, darker }) => {
  return (
    <button
      className={`w-[calc(50%-8px)] text-white rounded-[5px] py-2 px-4 ${darker ? 'bg-lapDarkBlue' : 'bg-lapBlue'}`}
    >
      {text}
    </button>
  );
};

const ButtonContainer = ({ children }) => {
    return (
      <div className="w-full flex justify-between">
        {children}
      </div>
    );
  };

  const IconButton = ({ icon, text, small = false }) => {
    return (
      <div className="flex flex-col items-center">
        <button
          className={`border-lapBlue border-2 rounded-[5px] text-white flex items-center justify-center ${small ? 'p-2' : 'p-6'}`}
        >
          {icon}
        </button>
        {!small && (
          <span className="text-lapBlue text-center mt-1 text-lg">
            {text}
          </span>
        )}
      </div>
    );
  };

export { FullButton, HalfButton, ButtonContainer, IconButton };
