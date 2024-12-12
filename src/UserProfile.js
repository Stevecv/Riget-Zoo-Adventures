var UserProfile = (function() {
    var email = "";
    var password = "";
    var authToken = "";

    var getEmail = function() {
        return email;
    };

    var setEmail = function(email) {
        this.email = email;
    };

    var getPassword = function() {
        return password;
    };

    var setPassword = function(password) {
        this.password = password;
    };

    var getAuthToken = function() {
        return authToken;
    }

    var setAuthToken = function(token) {
        this.authToken = token;
    }

    return {
        getEmail: getEmail,
        setEmail: setEmail,
        getPassword: getPassword,
        setPassword: setPassword,
        getAuthToken: getAuthToken,
        setAuthToken: setAuthToken,
    }

})();

export default UserProfile;