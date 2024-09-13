import React from 'react';
import useDarkMode from './hooks/useDarkMode'; // Import the custom hook

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode(); // Use the custom hook
  console.log(isDarkMode)
  return (
    <div className="bg-white dark:bg-slate-800 min-h-screen flex items-center justify-center">
      <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-slate-800">
        <h1 className="text-slate-900 dark:text-white text-2xl">Dark Mode Toggle</h1>
        <p className="text-slate-500 dark:text-slate-400">
          Click the button below to toggle dark mode.
        </p>
        <button
          onClick={toggleDarkMode}
          className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md shadow-lg"
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}

export default App;
