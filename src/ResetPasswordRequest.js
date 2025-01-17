import InputField from "./components/InputField";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useState} from "react";
import App from "./App";
import UserProfile from "./UserProfile";
import {useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';

export default function ResetPasswordRequest() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');
        const userData = {
            email,
        };

        try {
            const response = await fetch('http://127.0.0.1:8001/request-change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const result = await response.json();

            navigate("/change-password")
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.detail || 'Error requesting reset');
                console.log(errorData.detail || 'Error requesting reset')
                return;
            }
        } catch (error) {
            console.error('Error:', error);
            setError("Account doesn't exist");
        }
    };

    return (
        <div className="max-w-screen overflow-x-hidden">
            <div className="bg-background-400 w-screen h-screen flex flex-col">
                <Navbar />

                <div className="flex-grow flex items-center justify-center ">
                    <div className="bg-background-100 w-96 h-fit rounded-xl shadow-xl p-5 text-2xl">
                        <div className="text-3xl w-full text-center">
                            Request Password Reset
                        </div>

                        <form onSubmit={handleSubmit}>
                            <InputField id="email" label="Email Address" placeholder="someone@example.com" type="email"
                                        value={email} onChange={(e) => setEmail(e.target.value)}/>

                            <div className="text-lg pl-2 text-error">
                                {error}
                            </div>

                            <button
                                className="bg-primary text-center rounded-xl shadow-xl p-2 m-2 hover:bg-primary-600 duration-200 w-full"
                                onClick={handleSubmit}>
                                Request Password Reset
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
