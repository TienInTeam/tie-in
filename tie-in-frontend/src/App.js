import './App.css';
import Login from './pages/Login';
import SingUp from './pages/SignUp';
import { AuthProvider } from './contexts/AuthContext';
function App() {
  return (
    <AuthProvider>
    <div className="App">
      <header className="App-header">
        {/* <Login/>
        <br/> */}
        <SingUp/>
      </header>
    </div>
    </AuthProvider>
  );
}

export default App;
