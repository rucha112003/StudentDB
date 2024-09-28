import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Registeration from './Registeration';
import Header from './Header';
import Usertable from './Usertable';
import Update from './Update'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Demos from './Demos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Registeration />} />
          <Route path='/update' element={<Update />} />
          <Route path='/usertable' element={<Demos/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
