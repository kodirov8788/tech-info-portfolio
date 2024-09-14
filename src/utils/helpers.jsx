/**
 * Converts a date string to a readable format.
 * @param {string} dateString - The date string to format.
 * @returns {string} Formatted date string.
 */
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Generates a random ID.
 * @param {number} length - The desired length of the ID.
 * @returns {string} A random ID string.
 */
export const generateRandomId = (length = 8) => {
    return Math.random().toString(36).substr(2, length);
};

/**
 * Debounce function to limit the rate at which a function is invoked.
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The number of milliseconds to delay.
 * @returns {Function} Debounced function.
 */
export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} Capitalized string.
 */
export const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Checks if a string is a valid email.
 * @param {string} email - The email string to validate.
 * @returns {boolean} True if valid, otherwise false.
 */
export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

/**
 * Stores an item in localStorage.
 * @param {string} key - The key for the item.
 * @param {*} value - The value to store.
 */
export const setLocalStorageItem = (key, value) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

/**
 * Retrieves an item from localStorage.
 * @param {string} key - The key for the item.
 * @returns {*} The retrieved value.
 */
export const getLocalStorageItem = (key) => {
    if (typeof window !== 'undefined') {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }
    return null;
};

/**
 * Removes an item from localStorage.
 * @param {string} key - The key for the item.
 */
export const removeLocalStorageItem = (key) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
};

