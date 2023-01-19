import React, { createContext, useState } from 'react';

export const LoginContext = createContext({
    isLoggedIn: false,
    pickupAddress: "",
    login: (b: boolean) => {},
    updatePickupAddress: (address: string) => {},
    logout: () => {}
});

// @ts-ignore
export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [pickupAddress, setPickupAddress] = useState("");

    const login = (value:boolean) => {
        setIsLoggedIn(value);
    };
    const updatePickupAddress = (value:string) => {
        setPickupAddress(value);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <LoginContext.Provider
            value={{
                isLoggedIn,
                login,
                logout,
                pickupAddress,
                updatePickupAddress
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};