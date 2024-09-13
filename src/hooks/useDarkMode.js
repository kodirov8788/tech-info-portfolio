import { useEffect, useState } from 'react';

const useDarkMode = () => {
    // Check the localStorage and system preferences for dark mode
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return (
            localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        );
    });

    // Toggle dark mode
    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        const theme = newDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', newDarkMode);
    };

    useEffect(() => {
        // Apply the theme class to the document element
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
