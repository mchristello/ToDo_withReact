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

// Funcion to create de Task collection
export const setTasks = async (user, task) => {
    const db = getFirestore();
    let newTask = {
    user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
    },
    UserTasks: [...task],
    };
    const resolve = await addDoc(collection(db, "tasks"), newTask);
    return resolve.id;
};

// Funcion to bring the tasks from firestore
export const getAllTasks = () => {
    const db = getFirestore();
    const taskCollection = collection(db, "tasks");
    return getDocs(taskCollection);
};

// Function to recover the User data
export const getUser = (email) => {
    const database = getFirestore();
    const userData = query(collection(database, "users"), where("email", "==", email));
    return getDocs(userData);
}