import Navbar from "./Navbar";
import Footer from "./Footer";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import UserProfile from "./UserProfile";
import Cookies from "js-cookie";
import InputField from "./components/InputField";
import HotelRoom from "./components/HotelRoom";

export default function HotelBooking() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');
        const userData = {
            email,
            password,
        };

        try {
            const response = await fetch('http://127.0.0.1:8001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.detail || 'Error logging in');
                console.log(errorData.detail || 'Error logging in')
                return;
            }
            const result = await response.json();

            UserProfile.setEmail(email);
            UserProfile.setPassword(password);
            navigate("/")
            Cookies.set('email', email, { expires: 7 });
            Cookies.set('password', password, { expires: 7 });

            console.log('User logged in successfully:', result);
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to login user');
        }
    };




    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const getIsLoggedIn = async () => {
        let email = Cookies.get('email');
        let password = Cookies.get('password');

        console.log(email + " // " + password)

        const userData = {
            email,
            password,
        };

        try {
            const response = await fetch('http://127.0.0.1:8001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            return response.ok;
        } catch (exception) {

        }

        return false;
    }


    const checkChange = async () => {
        const a = await getIsLoggedIn();
        if (!a) {
            navigate('/login');
        }
    }

    checkChange().then(r => {})

    return (
        <div className="max-w-screen overflow-x-hidden">
            <div className="bg-background-400 w-screen h-screen flex flex-col">
                <Navbar />


                <HotelRoom />
            </div>
            <Footer/>
        </div>
    );
}