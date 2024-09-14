import React from 'react';
import useDarkMode from '../../../hooks/useDarkMode'; // Import the custom hook

function NightModeBtn() {
    const [isDarkMode, toggleDarkMode] = useDarkMode(); // Use the custom hook
    console.log(isDarkMode);
    // Sound effect
    const playSound = () => {
        // Use the public URL path for the sound file
        const audio = new Audio('/nightMode.mp3');
        audio.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
    };

    // Toggle dark mode and play sound
    const handleToggle = () => {
        playSound(); // Play sound when the button is clicked
        toggleDarkMode(); // Toggle dark mode
    };

    return (
        <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-slate-800">
            <h1 className="text-slate-900 dark:text-white text-2xl">Dark Mode Toggle</h1>
            <p className="text-slate-500 dark:text-slate-400">
                Click the button below to toggle dark mode.
            </p>
            <button
                onClick={handleToggle}
                className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md shadow-lg"
            >
                Toggle Dark Mode
            </button>
        </div>
    );
}

export default NightModeBtn;
