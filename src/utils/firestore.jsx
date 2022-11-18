import { getFirestore, getDocs, collection, query, where, addDoc } from "firebase/firestore";



// Functions to save Users Info 
export const setUser = (data) => {
    const database = getFirestore();
    const user = {
        name: data.name,
        email: data.email,
        password: data.password,
        uid: data.uid,
    };
    return addDoc(collection(database, "users"), user) 
}

// Function to recover the User data
export const getUser = (email) => {
    const database = getFirestore();
    const userData = query(collection(database, "users"), where("email", "==", email));
    return getDocs(userData);
}