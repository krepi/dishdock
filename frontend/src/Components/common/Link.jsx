import React from 'react';

const Link = ({ to, children }) => {
    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = to;
    };

    return (
        <a href={to} onClick={handleClick}>
            {children}
        </a>
    );
};

export default Link;

