import InputField from "./components/InputField";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SignUp() {
    return (
        <div className="max-w-screen overflow-x-hidden">
            <div className="bg-background-400 w-screen h-screen flex flex-col">
                <Navbar />

                <div className="flex-grow flex items-center justify-center ">
                    <div className="bg-background-100 w-96 h-fit rounded-xl shadow-xl p-5 text-2xl">
                        <div className="text-3xl w-full text-center">
                            Sign up
                        </div>

                        <form>
                            <InputField id="first_name" label="First Name" placeholder="John" />
                            <InputField id="last_name" label="Surname" placeholder="Smith" />
                            <InputField id="email" label="Email Address" placeholder="someone@example.com" type="email" />
                            <InputField id="password" label="Password" placeholder="" type="password" />

                            <button className="bg-primary text-center rounded-xl shadow-xl p-2 m-2 hover:bg-primary-600 duration-200 w-full" type="submit">
                                Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
