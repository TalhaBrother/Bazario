import { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isEdit, setIsEdit] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)
                // ...
            } else {
                // User is signed out
                // ...
                setUser(null)
            }
        });
    }, [])

    return (
        <AuthContext value={{ user, setUser,isEdit,setIsEdit,editProduct,setEditProduct }}>
            {children}
        </AuthContext>
    )
}

export default AuthContextProvider