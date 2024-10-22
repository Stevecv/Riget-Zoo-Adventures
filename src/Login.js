import InputField from "./components/InputField";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useState} from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
                return;
            }
            const result = await response.json();
            console.log('User logged in successfully:', result);
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to login user');
        }
    };

    return (
        <div className="max-w-screen overflow-x-hidden">
            <div className="bg-background-400 w-screen h-screen flex flex-col">
                <Navbar />

                <div className="flex-grow flex items-center justify-center ">
                    <div className="bg-background-100 w-96 h-fit rounded-xl shadow-xl p-5 text-2xl">
                        <div className="text-3xl w-full text-center">
                            Sign up
                        </div>

                        <form onSubmit={handleSubmit}>
                            <InputField id="email" label="Email Address" placeholder="someone@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <InputField
                                id="password"
                                label="Password"
                                placeholder=""
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={error ? 'border-red-500' : ''}
                            />

                            <div className="text-sm pl-2">
                                Don't have an account? <a href="/register" className="text-[#0000ee]">Register</a>
                            </div>

                            <button className="bg-primary text-center rounded-xl shadow-xl p-2 m-2 hover:bg-primary-600 duration-200 w-full" onClick={handleSubmit}>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
