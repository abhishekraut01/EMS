import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    // localStorage.clear()
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        setLocalStorage();
        const { employee, admin } = getLocalStorage();
        setUserData({ employee, admin }); // Set user as an object containing both employee and admin
    }, []);

    return (
        <AuthContext.Provider value={{ userData }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;