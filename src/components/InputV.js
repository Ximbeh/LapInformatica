import React from 'react';

const VerificationInput = ({ label, placeholder = '', onChange }) => {
    return (
            <input
                type="text"
                placeholder={placeholder}
                maxLength={1} 
                className="border-lapBlue border-2 rounded-md h-full text-center text-black" 
            />
    );
};

export default VerificationInput;