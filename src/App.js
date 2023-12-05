import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, React } from "react";
import { Mycontext } from "./Mycontext";
import Mycomponent from "./Mycomponent";
import Abcd from './Abcd';
import Form from './Form';
function App() {
  const [text, setText] = useState([]);

  return (
    <div>
      <Mycontext.Provider value={{ text, setText }}>
      <Mycomponent/>
      
      </Mycontext.Provider>
    </div>
  );
}

export default App;

        //<Router>
        //<Link  to="Form">Form Page</Link>
        //<Routes>
        //<Route path="/Form" element={<Form/>}/>
        //</Routes>
        //</Router>
      