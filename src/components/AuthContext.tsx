import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User as FirebaseUser } from '@firebase/auth';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

type AuthContextProps = {
    user: User | null;
    updateUser: (user: User | null) => void;
};

type User = FirebaseUser | null;

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const updateUser = (newUser: User | null) => {
        setUser(newUser);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            updateUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthContextProvider');
    }
    return context;
};
