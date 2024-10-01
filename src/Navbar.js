import React, { useState } from 'react';

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Company' },
        { id: 3, text: 'Resources' },
        { id: 4, text: 'About' },
        { id: 5, text: 'Contact' },
    ];

    return (
        <div className="flex bg-black text-background h-15 items-center w-full justify-between sticky top-0 z-50">
            <div className="space-x-6 p-5">
                <a href="#" className="h-10">LOGO</a>
                <a href="#" className="h-10">Book tickets</a>
                <a href="#" className="h-10">Hotel booking</a>
                <a href="#" className="h-10">Whats here</a>
            </div>

            <div className="space-x-6 p-5">
                <a href="#">Login</a>
                <a href="#">Sign up</a>
                <a href="#" className="bg-primary p-2 rounded-xl">Tickets</a>
            </div>
        </div>
    );
};

export default Navbar;