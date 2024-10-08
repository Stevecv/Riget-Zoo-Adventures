import './App.css';
import Navbar from "./Navbar";
import lion from './/images/lion.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock, faHippo, faPerson, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import {BrowserRouter, Link, Router} from 'react-router-dom';

function ButtonLink({ to, children }) {
    return <link to={to}><button>{children}</button></link>;
}

function App() {
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
                <div className="h-full flex items-center justify-center text-black text-8xl pl-[45%] text-right">
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

            <div className="flex justify-center items-center w-full pb-10 gap-5">
                <BrowserRouter>
                    <Link to="/accessability" className="bg-primary text-white flex  justify-center items-center text-background w-96 p-5 rounded-xl hover:scale-105 duration-200">
                        <FontAwesomeIcon icon={faClock} className="fa-xl pr-5"/>
                        <div className="text-xl">Open from 10am</div>
                    </Link>

                    <Link to="/accessability" className="bg-primary text-white flex  justify-center items-center text-background w-96 p-5 rounded-xl hover:scale-105 duration-200">
                        <FontAwesomeIcon icon={faPerson} className="fa-xl pr-5"/>
                        <div className="text-xl">Accessibility</div>
                    </Link>

                    <Link to="/accessability" className="bg-primary text-white flex  justify-center items-center text-background w-96 p-5 rounded-xl hover:scale-105 duration-200">
                        <FontAwesomeIcon icon={faInfoCircle} className="fa-xl pr-5"/>
                        <div className="text-xl">Information</div>
                    </Link>
                </BrowserRouter>
            </div>

            <h2 id="our-animals" className="text-7xl p-7">
                Our Animals
            </h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 pl-[10%] pr-[10%] place-items-center">
                {animals.map((animal, index) => (
                    <div className="w-[80%] rounded-xl shadow-xl bg-background-secondary text-white hover:scale-105 hover:shadow-2xl duration-200 m-5">
                        <img src={animal.image} className="rounded-t-xl w-full"/>

                        <h2 className="text-5xl p-4">{animal.title}</h2>

                        <div className="p-3 text-xl">{animal.description}</div>
                    </div>
                    ))}
            </div>

            <Footer/>


            {/*<h2 className="text-5xl p-4" id="our-animals">Our Animals</h2>*/}

            {/*<div className="flex justify-center">*/}
            {/*    <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 content-between w-[75%]">*/}
            {/*        <div className="flex items-center p-5 gap-5 justify-center">*/}
            {/*            <div className="transition hover:scale-110 duration-300">*/}
            {/*                <img src={lion} alt="Lion" className="w-60 shadow-2xl"/>*/}
            {/*                <div className="p-2">The African Lion</div>*/}

            {/*                <div className="text-lg w-60 text-left p-2">*/}
            {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lectus*/}
            {/*                    lectus, in*/}
            {/*                    imperdiet augue molestie non.*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}

            {/*        <div className="flex items-center p-5 gap-5 justify-center">*/}
            {/*            <div className="transition hover:scale-110 duration-300">*/}
            {/*                <img src={lion} alt="Lion" className="w-60 shadow-2xl"/>*/}
            {/*                <div className="p-2">The African Lion</div>*/}

            {/*                <div className="text-lg w-60 text-left p-2">*/}
            {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lectus*/}
            {/*                    lectus, in*/}
            {/*                    imperdiet augue molestie non.*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}

            {/*        <div className="flex items-center p-5 gap-5 justify-center">*/}
            {/*            <div className="transition hover:scale-110 duration-300">*/}
            {/*                <img src={lion} alt="Lion" className="w-60 shadow-2xl"/>*/}
            {/*                <div className="p-2">The African Lion</div>*/}

            {/*                <div className="text-lg w-60 text-left p-2">*/}
            {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lectus*/}
            {/*                    lectus, in*/}
            {/*                    imperdiet augue molestie non.*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}

            {/*        <div className="flex items-center p-5 gap-5 justify-center">*/}
            {/*            <div className="transition hover:scale-110 duration-300">*/}
            {/*                <img src={lion} alt="Lion" className="w-60 shadow-2xl"/>*/}
            {/*                <div className="p-2">The African Lion</div>*/}

            {/*                <div className="text-lg w-60 text-left p-2">*/}
            {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lectus*/}
            {/*                    lectus, in*/}
            {/*                    imperdiet augue molestie non.*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}

            {/*        <div className="flex items-center p-5 gap-5 justify-center">*/}
            {/*            <div className="transition hover:scale-110 duration-300">*/}
            {/*                <img src={lion} alt="Lion" className="w-60 shadow-2xl"/>*/}
            {/*                <div className="p-2">The African Lion</div>*/}

            {/*                <div className="text-lg w-60 text-left p-2">*/}
            {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lectus*/}
            {/*                    lectus, in*/}
            {/*                    imperdiet augue molestie non.*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<div className="h-96">*/}

            {/*</div>*/}
        </header>
    </div>
);
}

export default App;
