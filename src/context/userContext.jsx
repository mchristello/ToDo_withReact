import { createContext } from "react";
import { getUser, setUser } from "../utils/firestore";
import { useLocalStorage } from "../utils/localStorage";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2';


export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {

    const [userState, setUserState] = useLocalStorage('userLogged', null);

    const signIn = async ({ email, password }) => {
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const resolve = await getUser(email)
            setUserState(resolve.docs[0].data());
        } catch (error) {
            console.log(error)
            Swal.fire ({
                title: `Ups!!`,
                text: `Revisá los datos ingresados`,
                icon: `error`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const newUser = async (data) => {
        const auth = getAuth();
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            const user = res.user;
            setUser({
                ...data,
                uid: user.uid,
            });
            setUserState(data);
            console.log(userState);
        } catch (error) {
            console.warn(error)
            Swal.fire ({
                title: `Ups!!`,
                text: `Revisá los datos ingresados`,
                icon: `error`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        setUserState(null);
        });
    }

    const value = {
        userState,
        signIn,
        newUser,
        logOut
    }

    return (
        <UserContext.Provider value={value} >
            {children}
        </UserContext.Provider>
    )
}
