import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Header />}></Route>
        <Route path='/Register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
