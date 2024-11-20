import { useEffect, useState } from 'react';
import { getLocalStorage } from '../utils/localStorage';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const { employee, admin } = getLocalStorage();
        setUser({ employee, admin }); // Set user as an object containing both employee and admin
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;