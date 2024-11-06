import InputField from "./components/InputField";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useState} from "react";
import App from "./App";
import UserProfile from "./UserProfile";
import {useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';

export default function Logout() {
    const navigate = useNavigate()

    const logout = () => {
        Cookies.remove("email")
        Cookies.remove("password")
        navigate('/')
    }

    return (
        <div className="max-w-screen overflow-x-hidden">
            <div className="bg-background-400 w-screen h-screen flex flex-col">
                <Navbar />

                <div className="flex-grow flex items-center justify-center ">
                    <div className="bg-background-100 w-96 h-fit rounded-xl shadow-xl p-5 text-2xl">
                        <div className="text-3xl w-full text-center">
                            Are you sure you want to logout?
                        </div>

                        <div className="p-5 justify-center w-full flex">
                            <button onClick={logout} className="bg-error p-3 m-3 rounded-xl shadow-xl">
                                Confirm
                            </button>

                            <a href="/" className="bg-grey-200 p-3 m-3 rounded-xl shadow-xl">
                                Cancel
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
