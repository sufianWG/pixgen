import React from 'react';

const SmallButton = ({children}) => {
    return (
        <button className='text-sm px-2 py-1 bg-transparent border text-black font-bold rounded-full transition-all cursor-pointer hover:bg-gray-100'>{children}</button>
    );
};

export default SmallButton;