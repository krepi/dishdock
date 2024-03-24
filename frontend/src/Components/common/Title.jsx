import { useEffect } from 'react';

/**
 * Komponent SimpleTitle umożliwia zmianę tytułu strony.
 * @param {Object} props - Właściwości przekazywane do komponentu, w tym tytuł strony.
 * @param {string} props.title - Tytuł strony, który ma być ustawiony.
 */
const SimpleTitle = ({ title }) => {
    useEffect(() => {
        // Ustawianie tytułu strony
        if (title) {
            document.title = title;
        }
    }, [title]); // Re-render tylko w przypadku zmiany tytułu

    // Komponent nie renderuje niczego w DOM
    return null;
};

export default SimpleTitle;
