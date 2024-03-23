import React from 'react';

const Link = ({ to, children }) => {
    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = to;
    };

    return (
        <a href={to} onClick={handleClick} className='text-center text-center cursor-pointer hover:font-bold hover:text-gray-500'>
            {children}
        </a>
    );
};

export default Link;

