import React from 'react';

const VerificationInput = ({ label, placeholder = '', onChange }) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="text-lapBlue">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                maxLength={1} 
                className="border-lapBlue border-2 rounded-md p-7 w-5 h-10 text-center text-black" 
            />
        </div>
    );
};

export default VerificationInput;