import { Link } from "react-router-dom";
import { LuSearchCode } from "react-icons/lu";
import { MdOutlineNightsStay } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import React, { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";

const Header = () => {
    // State to toggle between icons
    const [showMenuIcon, setShowMenuIcon] = useState(true);
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    console.log(isDarkMode);
    const playSound = () => {
        // Use the public URL path for the sound file
        const audio = new Audio('/nightMode.mp3');
        audio.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
    };

    // Function to toggle icon visibility
    const toggleIcons = () => {
        setShowMenuIcon((prev) => !prev);
        playSound()
        toggleDarkMode();
    };

    return (
        <div className='h-[80px] w-full bg-gray-500'>
            <nav className="flex w-full justify-between items-center p-4 text-white">
                <Link to='/'>
                    <h1>LOGO</h1>
                </Link>
                <ul className="flex space-x-4 items-center">
                    <li>
                        <LuSearchCode className="text-2xl" />
                    </li>
                    <li>


                        {/* Toggle icons */}
                        {showMenuIcon ? (
                            <MdOutlineNightsStay className={`text-2xl cursor-pointer transition-opacity duration-300 ease-in-out opacity-100  ${showMenuIcon ? 'opacity-100' : 'opacity-0'}`}
                                onClick={toggleIcons} />
                        ) : (
                            <MdOutlineWbSunny
                                className={`text-2xl cursor-pointer transition-opacity duration-300 ease-in-out opacity-100 ${showMenuIcon ? 'opacity-0' : 'opacity-100'}`}
                                onClick={toggleIcons}

                            />
                        )}
                    </li>
                    <li className="relative">
                        <IoMenu className="text-2xl" />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
