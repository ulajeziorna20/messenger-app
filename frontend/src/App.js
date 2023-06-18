import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
    <div className="App">
       <Routes>
            <Route path="/messenger/login" element={<Login />} />
            <Route path="/messenger/register" element={<Register />} />
            <Route path="/" element={<App />} />
        </Routes>
    </div>
  );
} 

export default App;
