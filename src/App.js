
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Sigin } from './components/Sigin';
import { Login } from './components/Login';
import { Feed } from './components/Feed';
import { CreatePoll } from './components/CreatePoll';
import {Logout} from './components/Logout';
function App() {
  return (
    
      <>
        <Router>
        <Navbar></Navbar>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/createUser' element={<Sigin/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/feed' element={<Feed/>} />
          <Route path='/createPoll' element={<CreatePoll/>} />
          <Route path='/logout' element={<Logout/>} />
          </Routes>
        </Router>
        
      </>
    
  );
}

export default App;
