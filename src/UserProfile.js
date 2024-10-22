var UserProfile = (function() {
    var email = "";
    var password = "";

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

    return {
        getEmail: getEmail,
        setEmail: setEmail,
        getPassword: getPassword,
        setPassword: setPassword
    }

})();

export default UserProfile;