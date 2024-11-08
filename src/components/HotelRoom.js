import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Navbar from "../Navbar";
import {faBed} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function HotelRoom(props) {
    return (
        <div className="w-full flex items-center content-center justify-center">
            <a href="" className="w-full md:w-[80%] bg-background-600 shadow-xl p-5 m-5 rounded-3xl hover:scale-105 duration-200 flex-col flex">
                {props.name}

                <div className="">
                    {props.price}
                    <FontAwesomeIcon icon={faBed} className="fa-xl pr-5"/>{props.sleepsAmount}
                </div>
            </a>
        </div>
    )
}