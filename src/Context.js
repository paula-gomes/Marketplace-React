import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: '',
        auth: false,
        id: '',   
    });


    const login = (name,id) => {
        setUser((user) => ({
            name: name,
            auth: true,
            id: id
        }));
    };


    const logout = () => {
        setUser((user) => ({
            name: '',
            auth: false,
            id: ''
        }));
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider