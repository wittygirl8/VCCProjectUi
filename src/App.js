import React from 'react';
import {  BrowserRouter as Router,
  Routes,
  Route,
  Link, } from 'react-router-dom';
import LandingPage from './components/LandingPage';
// import { Switch } from 'react-router-dom';
import AddData from './components/AddData';
import ReadData from './components/ReadData';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Link to='/'>Home</Link>

      <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/add-data' element={<AddData/>} />
      <Route path='/read-data' element={<ReadData/>} />
    
      </Routes>
      </div>
    </Router>

    // <BrowserRouter>
    //   <div className="App">
    //     <Switch>
    //       <Route exact path="/">
    //         <LandingPage />
    //       </Route>
    //       <Route path="/add-data">
    //         <AddData />
    //       </Route>
    //       <Route path="/read-data">
    //         <ReadData />
    //       </Route>
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
