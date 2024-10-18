import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faInfoCircle, faPerson} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import lion from "./images/lion.jpg";

export default function Home() {
    const animals = [
        {
            title: "Lion",
            image: lion,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus eros in turpis sollicitudin, eu congue elit dignissim. Nunc non finibus augue. Aliquam ultrices leo lectus, condimentum vestibulum justo vestibulum eget.",
        },
        {
            title: "Lion",
            image: lion,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus eros in turpis sollicitudin, eu congue elit dignissim. Nunc non finibus augue. Aliquam ultrices leo lectus, condimentum vestibulum justo vestibulum eget.",
        },
        {
            title: "Lion",
            image: lion,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus eros in turpis sollicitudin, eu congue elit dignissim. Nunc non finibus augue. Aliquam ultrices leo lectus, condimentum vestibulum justo vestibulum eget.",
        },
        {
            title: "Lion",
            image: lion,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus eros in turpis sollicitudin, eu congue elit dignissim. Nunc non finibus augue. Aliquam ultrices leo lectus, condimentum vestibulum justo vestibulum eget.",
        },
        {
            title: "Lion",
            image: lion,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus eros in turpis sollicitudin, eu congue elit dignissim. Nunc non finibus augue. Aliquam ultrices leo lectus, condimentum vestibulum justo vestibulum eget.",
        },
        {
            title: "Lion",
            image: lion,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus eros in turpis sollicitudin, eu congue elit dignissim. Nunc non finibus augue. Aliquam ultrices leo lectus, condimentum vestibulum justo vestibulum eget.",
        }
    ]

    return (
        <div className="App">
            <header className="App-header font-plain">
                <Navbar/>
                <div className="bg-fixed bg-cover bg-center h-[75vh] bg-[url('.//images/meercat.jpg')] font-DM">
                    <div className="h-full flex items-center justify-center text-black text-8xl md:pl-[45%]
">
                        <div className="grid">
                            <div className="font-fancy">
                                Discover
                            </div>

                            <div>
                                Riget Zoo
                            </div>

                            <div>
                                Adventures
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-background h-[10vh]">

                </div>

                <div className="flex justify-center items-center w-full pb-10 gap-5 flex-col md:flex-row">
                    <Link to="\opening-times"
                          className="bg-primary text-white flex  justify-center items-center text-background w-96 p-5 rounded-xl hover:scale-105 duration-200">
                        <FontAwesomeIcon icon={faClock} className="fa-xl pr-5"/>
                        <div className="text-xl">Open from 10am</div>
                    </Link>

                    <Link to="/accessability"
                          className="bg-primary text-white flex  justify-center items-center text-background w-96 p-5 rounded-xl hover:scale-105 duration-200">
                        <FontAwesomeIcon icon={faPerson} className="fa-xl pr-5"/>
                        <div className="text-xl">Accessibility</div>
                    </Link>

                    <Link to="/information"
                          className="bg-primary text-white flex  justify-center items-center text-background w-96 p-5 rounded-xl hover:scale-105 duration-200">
                        <FontAwesomeIcon icon={faInfoCircle} className="fa-xl pr-5"/>
                        <div className="text-xl">Information</div>
                    </Link>
                </div>

                <h2 id="our-animals" className="text-7xl p-7">
                    Our Animals
                </h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 pl-[10%] pr-[10%] place-items-center">
                    {animals.map((animal, index) => (
                        <div
                            className="w-[80%] rounded-xl shadow-xl bg-background-secondary text-white hover:scale-105 hover:shadow-2xl duration-200 m-5 ">
                            <img src={animal.image} className="rounded-t-xl w-full"/>

                            <h2 className="text-5xl p-4">{animal.title}</h2>

                            <div className="p-3 text-xl">{animal.description}</div>
                        </div>
                    ))}
                </div>

                <h2 id="opening-times" className="text-7xl p-7">
                    Opening times
                </h2>

                <table className="table-fixed text-left mx-[15%] w-[70%] ">
                    <thead>
                    <tr>
                        <th>Day</th>
                        <th>Opening</th>
                        <th>Last Entry</th>
                        <th className="w-24">Closing</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="hover:backdrop-brightness-90 duration-200">
                        <td>Monday-Friday</td>
                        <td>10am</td>
                        <td>3:30pm</td>
                        <td>5pm</td>
                    </tr>
                    <tr className="hover:backdrop-brightness-90 duration-200">
                        <td>Saturday</td>
                        <td>9am</td>
                        <td>4:30pm</td>
                        <td>6pm</td>
                    </tr>
                    <tr className="hover:backdrop-brightness-90 duration-200">
                        <td>Sunday</td>
                        <td>9am</td>
                        <td>4:30pm</td>
                        <td>6pm</td>
                    </tr>
                    </tbody>
                </table>

                {/*<h2 id="opening-times" className="text-7xl p-7">*/}
                {/*    Our location*/}
                {/*</h2>*/}

                <Footer/>
            </header>
        </div>
    )
}