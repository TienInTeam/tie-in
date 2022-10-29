import './App.scss';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import UploadStudentProject from "./pages/UploadStudentProject";
import UploadBusinessProject from './pages/UploadBusinessProject';


const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/uploadstudentproject' element={<UploadStudentProject />}/>
            <Route path='/uploadbusinessproject' element={<UploadBusinessProject/>}/>
          </Routes>
        </QueryClientProvider>
      </div>
    </Router>
  );
}

export default App;
