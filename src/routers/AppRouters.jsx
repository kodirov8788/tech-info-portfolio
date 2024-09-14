import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Header from '../components/layout/Header';

const AppRouter = () => {
    return (
        <Router>
            <Header /> {/* Common layout component like header */}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Home route */}
                    <Route path="/about" element={<About />} /> {/* About route */}
                    <Route path="*" element={<NotFound />} /> {/* Fallback route for 404 */}
                </Routes>
            </main>
            {/* <Footer />  */}
        </Router>
    );
};

export default AppRouter;
