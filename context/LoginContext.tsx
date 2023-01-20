import React, { createContext, useState } from 'react';

export const LoginContext = createContext({
    isLoggedIn: false,
    orderObject: {},
    updateOrderItems:  (value: any) => {},
    pickupAddress: "",
    login: (b: boolean) => {},
    updatePickupAddress: (address: string) => {},
    logout: () => {}
});

// @ts-ignore
export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [pickupAddress, setPickupAddress] = useState("");

    const [orderObject, setOrderObject] = useState<any>();

    const login = (value:boolean) => {
        setIsLoggedIn(value);
    };
    const updatePickupAddress = (value:string) => {
        setPickupAddress(value);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };
    const updateOrderItems = (value:Array<any>)=>{
        setOrderObject(value)
    }

    return (
        <LoginContext.Provider
            value={{
                isLoggedIn,
                login,
                logout,
                pickupAddress,
                orderObject,
                updateOrderItems,
                updatePickupAddress,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};