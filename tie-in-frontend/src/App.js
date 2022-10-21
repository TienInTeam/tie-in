import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';



function App() {
  return (
    <Router>
      <div className="App">
        <>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
          </Routes>
        </>
      </div>
    </Router>
  );
}

export default App;
