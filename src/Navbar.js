import React, { useState } from 'react';

const Navbar = () => {
    return (
        <div className="flex bg-black text-background h-15 items-center w-full justify-between sticky top-0 z-50 pl-5">
            <div className="space-x-6">
                <a href="#" className="h-10">Home</a>
                <a href="#" className="h-10">Book tickets</a>
                <a href="#" className="h-10">Hotel booking</a>
                <a href="#our-animals" className="h-10">Our Animals</a>
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