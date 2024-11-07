import Navbar from "./Navbar";
import Footer from "./Footer";
import {faBed} from "@fortawesome/free-solid-svg-icons";
import {faHippo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function TicketsChoice() {
    return (
        <div>
            <div className="w-screen h-screen">
                <Navbar />

                <div className="flex flex-col md:flex-row justify-center items-center h-[100%] w-[100%]">
                    <a href="/hotelbooking"
                        className="w-[80%] md:w-[30%] h-[60vh] rounded-3xl shadow-xl p-5 border-grey-400 border-[1px] text-[80px] hover:scale-110 duration-200 m-5 flex items-center justify-center text-black">
                        <div className="text-center flex-col flex">
                            Hotel

                            <FontAwesomeIcon icon={faBed} className="fa-xl pr-5"/>
                        </div>
                    </a>

                    <a href="/zoobooking"
                        className="w-[80%] md:w-[30%] h-[60vh] rounded-3xl shadow-xl p-5 border-grey-400 border-[1px] text-[80px] hover:scale-110 duration-200 m-5 flex items-center justify-center text-black">
                        <div className="text-center flex-col flex">
                            Zoo

                            <FontAwesomeIcon icon={faHippo} className="fa-xl pr-5"/>
                        </div>
                    </a>
                </div>
            </div>

            <Footer/>
        </div>
    )
}