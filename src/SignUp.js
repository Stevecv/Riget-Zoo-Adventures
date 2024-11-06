import InputField from "./components/InputField";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function SignUp() {
    const [firstname, setFirstName] = useState('');
    const [surname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');

            const userData = {
                firstname, // make sure to define these variables from your form inputs
                surname,
                email,
                password,
            };

            console.log(userData);

            try {
                const response = await fetch('http://127.0.0.1:8001/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setError(errorData.detail || 'Error registering user');
                    return;
                }

                const result = await response.json();
                navigate("/login")
                console.log('User registered successfully:', result);
            } catch (error) {
                console.error('Error:', error);
                setError('Failed to register user');
            }
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
                            <InputField id="first_name" label="First Name" placeholder="John" value={firstname}
                                        onChange={(e) => setFirstName(e.target.value)}/>
                            <InputField id="last_name" label="Surname" placeholder="Smith" value={surname}
                                        onChange={(e) => setLastName(e.target.value)}/>
                            <InputField id="email" label="Email Address" placeholder="someone@example.com" type="email"
                                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <InputField
                                id="password"
                                label="Password"
                                placeholder=""
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={error ? 'border-red-500' : ''}
                            />
                            <InputField
                                id="confirm-password"
                                label="Confirm password"
                                placeholder=""
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={error ? 'border-red-500' : ''}
                            />

                            <div className="text-sm pl-2">
                                Already have an account? <a href="/login" className="text-[#0000ee]">Login</a>
                            </div>

                            <div className="text-lg pl-2 text-error">
                                {error}
                            </div>

                            <button
                                className="bg-primary text-center rounded-xl shadow-xl p-2 m-2 hover:bg-primary-600 duration-200 w-full"
                                onClick={handleSubmit}>
                                Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
