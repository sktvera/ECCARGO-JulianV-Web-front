import React from "react";
import { Route, Routes } from 'react-router-dom'
import Welcome from './Routes/Welcome/Welcome'
import Mens from'./Routes/Mens/Mens'
import Woman from './Routes/Woman/Woman';
import Footer from "./Components/Includes/Footer/Footer";
import Header from "./Components/Includes/Header/Header";
import Stores from './Components/stores/stores'
import Things from './Routes/Things/Things'

import Task from './Routes/Task/Task';

import './App.css'

//Redux
import { Provider } from 'react-redux';
import {store} from './store/store';

function App() {
  return (<Provider store={store}>
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' exact={true} element={<Welcome/>}/>
      <Route path='/mattelsaChallenge' element={<Welcome/>}/>
      <Route path="/Mens" element={<Mens/>}/>
      <Route path="/woman" element={<Woman/>}/>
      <Route path="/task/:id" element={<Task/>}/>
      <Route path="/store" element={<Stores/>}/>
      <Route path="/things" element={<Things/>}/>
     
    </Routes>
    <Footer/>
    </div>
    
  </Provider>
  );
}

export default App;
