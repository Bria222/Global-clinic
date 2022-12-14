import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='register' element={<Register/>} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;
