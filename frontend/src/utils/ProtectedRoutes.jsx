/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);

    async function getUser() {
        if (!token) return;
        const res = await fetch('api/user', {
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if(res.ok){setUser(data)};
    }

    useEffect(() => {if(token) {getUser()}}, [token])
    
    return (
        <UserContext.Provider value={{ user, token, setUser, setToken }}>
            {children}
        </UserContext.Provider>
    );
};

export const ProtectedRoutes = () => {
    const { user } = useContext(UserContext);
    
    if (!user) {
        return <div>Chargement...</div>;
    }
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export const ProtectedAuthRoutes = () => {
    const { token } = useContext(UserContext);
    // verifier le role 
    return token ? <Navigate to="/dashboard" /> : <Outlet />;
};