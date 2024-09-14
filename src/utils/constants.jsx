// API Endpoints
export const API_BASE_URL = 'https://api.example.com';
export const USER_ENDPOINT = `${API_BASE_URL}/users`;
export const POSTS_ENDPOINT = `${API_BASE_URL}/posts`;
export const COMMENTS_ENDPOINT = `${API_BASE_URL}/comments`;

// Action Types for Redux (or any state management library)
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

// General Configuration
export const ITEMS_PER_PAGE = 10;
export const DEFAULT_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'de'];

// HTTP Status Codes
export const HTTP_STATUS_OK = 200;
export const HTTP_STATUS_CREATED = 201;
export const HTTP_STATUS_BAD_REQUEST = 400;
export const HTTP_STATUS_UNAUTHORIZED = 401;
export const HTTP_STATUS_FORBIDDEN = 403;
export const HTTP_STATUS_NOT_FOUND = 404;
export const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;

// Theme Settings
export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

// Error Messages
export const ERROR_NETWORK = 'Network error. Please try again later.';
export const ERROR_UNAUTHORIZED = 'You are not authorized to access this resource.';
export const ERROR_NOT_FOUND = 'The requested resource could not be found.';
export const ERROR_GENERIC = 'An error occurred. Please try again.';

// Other Constants
export const MAX_UPLOAD_SIZE = 5242880; // 5 MB in bytes
export const SUPPORTED_IMAGE_FORMATS = ['image/jpeg', 'image/png', 'image/gif'];
export const DATE_FORMAT = 'YYYY-MM-DD';
