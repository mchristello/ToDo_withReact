import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import TaskListContainer from "./components/TaksListContainer";
import { TaskContextProvider } from "./context/taskContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewTask from './components/NewTask';

function App() {
  return (
    <BrowserRouter basename='/ToDo_withReact'>
      <div className="App">
        <TaskContextProvider>
          <NavBar />
          <h1 className="text-success mt-5"><strong><u>To Do List.</u></strong></h1>
          <Routes>
            <Route path='/' element={<TaskListContainer />} />
            <Route path='/newTask' element={<NewTask />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
