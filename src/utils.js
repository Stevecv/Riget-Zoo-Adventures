import Cookies from "js-cookie";

export const getIsLoggedIn = async () => {
    let token = Cookies.get('authToken');
    let email = Cookies.get('email');

    const userData = {
        email,
        token,
    };

    try {
        console.log(JSON.stringify(userData));
        const response = await fetch('http://127.0.0.1:8001/hash-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        return response.ok;
    } catch (exception) {
        console.error('Error in getIsLoggedIn:', exception);
    }

    return false;
};