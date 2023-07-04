import React from "react";
import {Route,Routes} from "react-router-dom";
import './App.css';
import Dsa from "./components/Dsa";
import Dbms from "./components/Dbms";
import Operating from "./components/Operating";
import Systemdesign from "./components/Systemdesign";
import Computernetwork from "./components/Computernetwork";
import Oops from "./components/Oops";
import Webdevelopment from "./components/Webdevelopment";
import Machinelearning from "./components/Machinelearning";
import Appdevelopment from "./components/Appdevelopment";
import Home from "./components/Home";
function App() {
  return (
     <Routes>
      <Route path="/" element={<Home/>}/> 
    <Route path="/DSA" element={<Dsa/>}/>   
    <Route path="/DBMS" element={<Dbms/>}/> 
    <Route path="/OPERATING" element={<Operating/>}/>
    <Route path="/SYSTEMDESIGN" element={<Systemdesign/>}/>
    <Route path="/COMPUTERNETWORK" element={<Computernetwork/>}/>
    <Route path="/OOPS" element={<Oops/>}/>
    <Route path="/WEBDEVELOPMENT" element={<Webdevelopment/>}/>
    <Route path="/MACHINELEARNING" element={<Machinelearning/>}/>
    <Route path="/APPDEVELOPMENT" element={<Appdevelopment/>}/>
     </Routes>
        
  );
}

export default App;
