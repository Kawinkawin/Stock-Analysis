import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import LandingPage from './Pages/LandingPage';
import LiveGraph from './Pages/LiveGraph/LiveGraph';
import PredictionPage from './Pages/PredictionPage/PredictionPage';

function App() {
  

  return (
    <Router>
        
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/LiveGraph' element={<LiveGraph />} />
        <Route path='/PredictionPage' element={<PredictionPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
