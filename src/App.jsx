import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import TaskListContainer from "./components/TaksListContainer";
import { TaskContextProvider } from "./context/taskContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewTask from './components/NewTask';
import LogIn from './components/Login';
import { UserContextProvider } from './context/userContext';
import NewUser from './components/NewUser';
// Frameworks
import { firebaseConfig } from "./utils/firebase.jsx";
import { initializeApp } from "firebase/app";
import UserAccount from './components/UserAccount';

initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter basename='/ToDo_withReact' >
      <div className="App">
        <UserContextProvider>
          <TaskContextProvider>
            <NavBar />
            <h1 className="text-success mt-5"><strong><u>To Do List.</u></strong></h1>
            <Routes>
              <Route path='/' element={<TaskListContainer />} />
              <Route path='/newTask' element={<NewTask />} />
              <Route path='/logIn' element={<LogIn />} />
              <Route path='/newUser' element={<NewUser />} />
              <Route path='/userAccount' element={<UserAccount />} />
            </Routes>
          </TaskContextProvider>
        </UserContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
