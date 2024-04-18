import React from "react";
import { Route, Routes } from 'react-router-dom'
import Welcome from './Routes/Welcome/Welcome'
import Mens from'./Routes/Mens/Mens'
import Woman from './Routes/Woman/Woman';
import Footer from "./Components/Includes/Footer/Footer";
import Header from "./Components/Includes/Header/Header";
import Things from "./Routes/Things/Things";
import Stores from "./Components/stores/stores";




import './App.css'


function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' exact={true} element={<Welcome/>}/>
      <Route path='/ECCARGO' element={<Welcome/>}/>
      <Route path="/Mens" element={<Mens/>}/>
      <Route path="/Quotation" element={<Woman/>}/>
      <Route path="/store" element={<Stores/>}/>
      <Route path="/things" element={<Things/>}/>
     
    </Routes>
    <Footer/>
    </div>
    
 
  );
}

export default App;
