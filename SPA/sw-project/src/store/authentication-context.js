import React from "react";

const AuthenticationContext = React.createContext({
    isAuthenticated: false, 
    logout: () => {}
});

export const AuthenticationProviderContext = props => {
    return <AuthenticationContext.Provider >{props.children}</AuthenticationContext.Provider>
};

export default AuthenticationContext;