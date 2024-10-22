import React, {useEffect, useState} from 'react';
import {faBars, faHamburger, faInfoCircle, faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const [isTransparent, setIsTransparent] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Adjust this value as needed
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="sticky top-0 z-40 text-white font-plain text-3xl">
            <div
                className="bg-black text-background h-15 items-center w-full justify-between sticky top-0 z-50 pl-5 hidden lg:flex p-1">
                <div className="space-x-6">
                    <a href="/" className="h-10">Home</a>
                    <a href="#" className="h-10">Book tickets</a>
                    <a href="#" className="h-10">Hotel booking</a>
                    <a href="/#our-animals" className="h-10">Our Animals</a>
                </div>

                <div className="space-x-6 p-5">
                    <a href="/login">Login</a>
                    <a href="sign-up">Sign up</a>
                    <a href="#" className="bg-primary p-2 rounded-xl">Tickets</a>
                </div>
            </div>

            <div
                className={`sticky p-4 top-0 h-16 flex items-center justify-between transition-colors duration-200 lg:hidden ${isTransparent ? 'bg-transparent text-black' : 'bg-black text-white'}`}>
                <FontAwesomeIcon icon={faBars} className="fa-xl pr-5 cursor-pointer" onClick={toggleOpen}/>
            </div>

            <Menu className="bg-black h-screen min-w-full text-white top-0 lg:hidden" isOpen={isOpen}
                  onStateChange={({isOpen}) => setIsOpen(isOpen)}>
                <div
                    className={`sticky p-4 top-0 h-16 text-left`}>
                    <FontAwesomeIcon icon={faBars} className="fa-xl pr-5 cursor-pointer" onClick={toggleOpen}/>
                </div>
                <a href="#" className="p-4 text-3xl hover:text-4xl w-[100%] hover:text-gray duration-200"
                   onClick={toggleOpen}>Home</a>
                <a href="#" className="p-4 text-3xl hover:text-4xl w-[100%] hover:text-gray duration-200"
                   onClick={toggleOpen}>Book tickets</a>
                <a href="#" className="p-4 text-3xl hover:text-4xl w-[100%] hover:text-gray duration-200"
                   onClick={toggleOpen}>Hotel booking</a>
                <a href="#our-animals" className="p-4 text-3xl hover:text-4xl w-[100%] hover:text-gray duration-200"
                   onClick={toggleOpen}>Our Animals</a>
                <a href="/login" className="p-4 text-3xl hover:text-4xl w-[100%] hover:text-gray duration-200"
                   onClick={toggleOpen}>Login</a>
                <a href="/sign-up" className="p-4 text-3xl hover:text-4xl w-[100%] hover:text-gray duration-200"
                   onClick={toggleOpen}>Sign up</a>
                <a href="#" className="p-4 text-3xl hover:text-4xl w-[100%] hover:text-gray duration-200"
                   onClick={toggleOpen}>Tickets</a>
            </Menu>
        </div>
    );
};


export default Navbar;